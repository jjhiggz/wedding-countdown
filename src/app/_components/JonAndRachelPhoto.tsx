import Image from "next/image";

export const JonAndRachelPhoto = () => {
  return (
    <Image
      src={"/photos/jon-and-rachel.jpeg"}
      width={400}
      height={400}
      style={{ height: 400, objectFit: "cover" }}
      alt="Jon and Rachel on their proposal day"
    />
  );
};
