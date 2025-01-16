import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import truncateText from "@/utils/trancateText";
import Buttons, { DeletePost, EditPost } from "./Buttons";

const statusStyle = {
  free: {
    label: "رایگان",
    className: "bg-green-500",
  },
  premium: {
    label: "پولی",
    className: "bg-gray-600",
  },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td> {category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span
          className={`py-1 px-2 text-white rounded-full ${statusStyle[type].className}`}
        >
          {statusStyle[type].label}
        </span>
      </td>
      <td >
        <DeletePost />
        <EditPost />
      </td>
    </Table.Row>
  );
}
export default PostRow;
