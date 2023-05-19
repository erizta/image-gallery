import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFirestore("images");
  if (isLoading) {
    return (
      <div className="mt-10 text-center">
        <progress className="w-56 progress"></progress>
      </div>
    );
  }

  return (
    <div className="grid justify-center gap-4 mt-10 md:grid-cols-3">
      {images.map((img, idx) => (
        <div key={idx} className="w-full shadow-xl card card-compact bg-base-100">
          <figure className="max-h-60">
            <img src={img.image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>Upload by: {img.user_email}</p>
            <span>Created at: {img.created_at.toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
