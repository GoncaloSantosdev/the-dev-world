"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
// Firebase Storage
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
// React Icons
import { CiCirclePlus } from "react-icons/ci";
import { BsImage, BsPlayBtn } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
// React Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const CreatePostPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "frontend", // If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section className="mt-10">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-4xl text-black "
      />
      <select
        className="mt-6 border"
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="frontend">frontend</option>
        <option value="backend">backend</option>
        <option value="full-stack">full-stack</option>
        <option value="web-design">web-design</option>
        <option value="web-security">web-security</option>
      </select>

      <div className="flex items-center gap-8 mt-6">
        <button onClick={handleOpen}>
          <CiCirclePlus size={40} />
        </button>

        {open && (
          <div className="flex items-center gap-6">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
            <button>
              <label htmlFor="image" className="cursor-pointer">
                <BsImage size={24} />
              </label>
            </button>
            <button>
              <AiOutlineCloudUpload size={24} />
            </button>
            <button>
              <BsPlayBtn size={24} />
            </button>
          </div>
        )}
      </div>

      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Write something about code..."
        className="mt-6 placeholder:text-base"
      />

      <button className="btn-primary mt-12" onClick={handleSubmit}>
        Publish
      </button>
    </section>
  );
};

export default CreatePostPage;
