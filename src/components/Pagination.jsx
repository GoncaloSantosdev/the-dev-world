const Pagination = () => {
  return (
    <div className="flex justify-between mt-8">
      <button className="bg-slate-800 text-white px-4 py-2 rounded">
        Previous
      </button>

      <button className="bg-slate-800 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
