import ImageZoom from "./ImageZoom";

export function Tables() {
  return (
    <div className="FontArTarumianBarakU tracking-[20%] p-7 flex flex-col gap-10 items-center">
      <ImageZoom src="/table1.png" alt="image" />

      <a
        href="/table1.png"
        download
        className="bg-guyn text-[#FFFDFB] px-5 py-3 rounded-lg inline-block"
      >
        Ներբեռնել
      </a>
      
      <ImageZoom src="/table2.png" alt="image" />

      <a
        href="/table2.png"
        download
        className="bg-guyn text-[#FFFDFB] px-5 py-3 rounded-lg inline-block"
      >
        Ներբեռնել
      </a>
    </div>
  );
}
