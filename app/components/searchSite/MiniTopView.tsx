type Params = {
  params: any;
};

export default function MiniTopView({ params }: Params) {
  console.log(params.topic);
  return (
    <div className="bg-[url('/main_bg_2.jpg')] bg-cover bg-center w-full h-[150px] pt-[100px] px-[180px]">
      <span className="bg-white px-[20px] text-[24px] font-bold rounded-md">{params.topic}</span>
    </div>
  );
}
