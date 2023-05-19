import useFirestore from "../hooks/useFirestore";

const ImageGallery = () => {
  const { docs:images,isLoading } = useFirestore("images");
if(isLoading){
  return(
    <div className="mt-10 text-center"><progress className="w-56 progress"></progress></div>
  )
}
  
  return (
    <div className="grid justify-center gap-4 mt-10 md:grid-cols-3">
      <div className="shadow-xl card card-compact w-96 bg-base-100">
        <figure>
          <img src="" alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>Upload by:</p>
          <span>Created at:</span>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
