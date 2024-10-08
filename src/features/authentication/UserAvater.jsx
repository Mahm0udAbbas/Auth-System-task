import useUser from "../../hooks/useUser";

export default function UserAvater() {
  const { user } = useUser();

  return (
    <div className="text-gray-50 flex gap-5 items-center text-2xl font-meduim">
      <img
        className="block w-16 object-cover object-center rounded-full outline-2 outline-gray-100 outline "
        src="default-user.jpg"
      />
      <span
        className="text-xl text-blue-500 font-bold
      "
      >
        {user?.firstName} {user?.lastName}
      </span>
    </div>
  );
}
