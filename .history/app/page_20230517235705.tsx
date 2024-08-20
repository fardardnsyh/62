import Input from "./components/Input";

export default function Home() {
  return (
    <div className="flex justify-center p-2 bg-cover h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="bg-white/25 mx-24 flex justify-between w-full rounded-lg p-12">
        <Input />
      </div>
    </div>
  );
}
