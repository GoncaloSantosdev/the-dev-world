"use client";
import { useState } from "react";
// React Icons
import { CiCirclePlus } from "react-icons/ci";
import { BsImage, BsPlayBtn } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";
// React Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const CreatePostPage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <section className="mt-10">
      <input placeholder="Title" className=" w-full text-4xl text-black " />
      <div className="flex items-center gap-8 mt-6">
        <button onClick={handleOpen}>
          <CiCirclePlus size={40} />
        </button>

        {open && (
          <div className="flex items-center gap-6">
            <button>
              <BsImage size={24} />
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

      <button className="btn-primary mt-12">Publish</button>
    </section>
  );
};

export default CreatePostPage;
