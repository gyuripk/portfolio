import MarkdownViewer from "./MarkdownViewer";
import useMarkdownFiles from "../hooks/useMarkdownFiles";

function MarkdownList() {
  const githubUsername = "rbfl6418";
  const repoName = "rbfl6418.github.io";
  const directory = "_posts";

  const files = useMarkdownFiles(githubUsername, repoName, directory);

  console.log(files);
  return (
    <div className="container">
      <h2>Blog Posts</h2>
      <MarkdownViewer files={files} />
    </div>
  );
}

export default MarkdownList;
