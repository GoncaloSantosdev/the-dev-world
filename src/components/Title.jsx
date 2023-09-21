const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h3 className="text-gray-500">{subtitle}</h3>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default Title;
