import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col max-h-96 bg-dark-3 rounded-xl cursor-pointer max-w-sm"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img
              src={fileUrl}
              alt="image"
              className="file_uploader-img max-h-60"
            />
          </div>
          <p className="file_uploader-label text-center">
            Click or drag photo to replace
          </p>
        </>
      ) : (
        <div className="file_uploader-box flex flex-col items-center p-5">
          <img
            src="/assets/icons/file-upload.svg"
            width={48}
            height={38.5}
            alt="file upload"
          />

          <h3 className="base-medium text-light-2 mb-2 mt-6 text-center">
            Drag photo here
          </h3>
          <p className="text-light-4 small-regular mb-6 text-center">
            SVG, PNG, JPG
          </p>

          <Button type="button" className="shad-button_dark_4">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
