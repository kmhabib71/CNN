import React, { useState } from "react";
import Editor from "./TextEditor/TextEditorWithQuill";
function CreateNews() {
  const [title, setTitle] = useState("");
  const [types, setTypes] = useState([]);
  const [NewsCategory, setNewsCategory] = useState([]);
  const [NewsSubCategory, setNewsSubCategory] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedNewsCategory, setSelectedNewsCategory] = useState("");
  const [selectedNewsSubCategory, setSelectedNewsSubCategory] = useState("");
  const [editorText, setEditorText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleNewsTypeChange = (e) => {
    setSelectedType(e.target.value);
    console.log(e.target.value);
  };
  const handleNewsCategoryChange = (e) => {
    setSelectedNewsCategory(e.target.value);
    console.log(e.target.value);
  };
  const handleNewsSubCategoryChange = (e) => {
    setSelectedNewsSubCategory(e.target.value);
    console.log(e.target.value);
  };
  const maxFileSizeinBytes = 50 * 1024 * 1024;
  const allowedFileTypes = [
    "image/jpeg",
    "image/JPG",
    "image/png",
    "image/gif",
    "video/mp4",
    "video/webm",
    "video/ogg",
  ];
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > maxFileSizeinBytes) {
        setError("File Size in exceeds the maximum allowed size.");
        return;
      }
    }
    const fileType = file.type.split("/")[0];
    setSelectedFile(file);
    setFileType(fileType);
    setError(null);

    if (allowedFileTypes.includes(file.type)) {
      if (fileType === "image") {
        const reader = new FileReader();
        reader.onloadend = () => {
          const fileDataUrl = reader.result;
          setPreviewUrl(fileDataUrl);
        };

        reader.readAsDataURL(file);
      } else if (fileType === "video") {
        setPreviewUrl(URL.createObjectURL(file));
      }
    }
    console.log(file);
  };
  const handleEditorChange = (content) => {
    setEditorText(content);
    console.log("Editor Content: ", content);
  };
  const handleSubmit = async () => {};
  return (
    <div className="mt-28">
      <div className="mx-auto bg-white drop-shadow-md w-10/12 rounded">
        <h3 className="p-6 font-bold mb-8 text-black border-b">
          {" "}
          Write News Article
        </h3>
        <div className="container p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-10">
              <label htmlFor="title" className="block text-sm  text-gray-600">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              />
            </div>
            <div className="mb-10">
              <label htmlFor="newsType" className="block text-sm text-gray-600">
                News Type
              </label>
              <select
                id="NewsType"
                name="NewsType"
                value={selectedType}
                onChange={handleNewsTypeChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md">
                <option value="" disabled>
                  Select News Type
                </option>
                {types.map((types) => (
                  <option value={types.name} key={types._id}>
                    {types.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10">
              <label className="block text-sm text-gray-600">Upload File</label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={handleFileChange}
                className="sr-only"
                accept="image/*,video/*"
              />
              <label
                htmlFor="file"
                className="mt-1 p-2 w-full cursor-pointer border border-gray-300 rounded-md flex items-center  justify-center bg-blue-600 text-white hover:bg-gray-900">
                Select Image or Video
              </label>
              {error && <p className="text-red-500">{error}</p>}
              {previewUrl && (
                <div className="mt-2">
                  {fileType === "image" && (
                    <img
                      src={previewUrl}
                      alt="Preview image"
                      className="max-w-full h-96"
                    />
                  )}
                  {fileType === "video" && (
                    <video
                      controls
                      src={previewUrl}
                      alt="Preview image"
                      className="w-100  object-cover">
                      <source src={previewUrl} type={selectedFile.type} />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </div>
            <Editor
              placeholder="Write Something..."
              onChange={handleEditorChange}
              initialText={""}
            />
            <div className="mb-10"></div>
            <div className="mb-10">
              <label htmlFor="newsType" className="block text-sm text-gray-600">
                News Category
              </label>
              <select
                id="NewsCategory"
                name="NewsCategory"
                value={selectedNewsCategory}
                onChange={handleNewsCategoryChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md">
                <option value="" disabled>
                  Select News Category
                </option>
                {NewsCategory.map((category) => (
                  <option value={category.name} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10">
              <label htmlFor="newsType" className="block text-sm text-gray-600">
                News Sub Category
              </label>
              <select
                id="NewsSubCategory"
                name="NewsSubCategory"
                value={selectedNewsSubCategory}
                onChange={handleNewsSubCategoryChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md">
                <option value="" disabled>
                  Select News Sub Category
                </option>
                {NewsSubCategory.map((subcategory) => (
                  <option value={subcategory.name} key={subcategory._id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10">
              <label htmlFor="author" className="block text-sm  text-gray-600">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNews;
