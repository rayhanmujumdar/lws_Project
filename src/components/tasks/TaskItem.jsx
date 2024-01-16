import { FaStar } from "react-icons/fa";
// const tagsColor = ["00D991A1", "1C92FFB0", "FE1A1AB5"];
export default function TaskItem({ task, onFavorite, onEdit, onDelete }) {
  const { id, title, description, priority, isFavorite, tags } = task;
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button onClick={() => onFavorite(id)}>
          {isFavorite ? <FaStar color="yellow" /> : <FaStar color="gray" />}
        </button>
      </td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {tags.map((tag, i) => (
            <li key={i}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => onDelete(id)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => onEdit(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
