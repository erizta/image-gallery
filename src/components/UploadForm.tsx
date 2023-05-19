import { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      startUpload(selectedFile);
    }
    setSelectedFile(null);
  };

  return (
    <div className="mt-10 text-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full max-w-xs file-input file-input-bordered"
        />
        <button
          type="submit"
          className={`gap-3 btn ${Boolean(progress)&&'loading'}`}
          disabled={!selectedFile}
        >
          Upload<span>🚀</span>
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
