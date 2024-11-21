import Image from "next/image";
import styles from "./team.module.scss";

export function generateMetadata() {
  return {
    title: "Team",
    description: "this is Team page",
  };
}

export default function TeamPage() {
  return (
    <div>
      <h1>Team</h1>
      <div className={styles["person"]}>
        <div className={styles["person-img"]}>
          <Image
            src="/guy.jpg"
            alt="team"
            sizes="(min-width: 800px) 300px, 680px"
            width={0}
            height={0}
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula cursus purus, id condimentum lacus feugiat sit amet. Nam
            non hendrerit est. Aliquam erat volutpat. Morbi tincidunt ut ligula
            at sagittis. Maecenas mattis risus sem, vitae aliquam felis volutpat
            nec. Ut vel commodo nisl. Donec pellentesque augue sit amet nunc
            volutpat, in blandit ex mollis. Praesent arcu eros, viverra a mi sit
            amet, volutpat mattis dui. Aliquam dictum est et pharetra bibendum.
            Cras ac aliquet lectus, eget porta ipsum.
          </p>
          <p>
            Maecenas maximus sit amet velit eget fermentum. Cras bibendum, purus
            vel porttitor hendrerit, tortor elit dignissim lorem, sit amet
            elementum ante purus posuere orci. Integer commodo vehicula dolor
            sit amet imperdiet. Donec commodo convallis blandit. Curabitur
            varius augue eu sapien sagittis, a fringilla velit pellentesque.
            Nulla facilisi. Praesent molestie elementum arcu non feugiat. Nulla
            porttitor neque ut nisl feugiat mattis. Pellentesque condimentum,
            urna a rhoncus pellentesque, dui urna aliquet erat, eu fringilla
            sapien nunc et magna. Sed elementum tincidunt lorem in tincidunt.
            Phasellus posuere tincidunt lacus, vehicula maximus augue ornare
            vitae. Nullam eu lorem lobortis, pulvinar ex sit amet, maximus mi.
            Nunc eget libero a tortor sagittis tristique in sed velit. Nulla
            facilisi.
          </p>
        </div>
      </div>
    </div>
  );
}
