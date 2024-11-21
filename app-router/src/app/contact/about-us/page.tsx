import { LastNews } from "@/common/components/LastNews";
import style from "./aboutUs.module.scss";

export default function AboutUsPage() {
  return (
    <div>
      <h1>About us</h1>
      <section className={style.text}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut enim
          quam. Mauris vel odio faucibus, consequat sapien ac, posuere sem.
          Phasellus sollicitudin eros nisl, ut eleifend ex varius nec. In
          feugiat orci sed turpis consequat, pellentesque elementum metus
          ornare. Phasellus commodo condimentum erat, ultricies dapibus felis
          laoreet quis. Ut pulvinar vitae lacus nec ullamcorper. Pellentesque
          sagittis efficitur nibh, ac convallis risus accumsan et. Nullam
          ullamcorper commodo pretium.
        </p>
        <p>
          Curabitur felis nulla, rutrum blandit velit nec, euismod malesuada
          nibh. Mauris diam odio, lacinia id tempus vel, congue a neque.
          Maecenas lacinia facilisis sapien eu tincidunt. Cras fringilla lacus
          nibh, vel malesuada purus bibendum non. Nulla posuere quam vel maximus
          sodales. Suspendisse potenti. Vivamus semper eros est, eget volutpat
          nisi tempus aliquam. Fusce non finibus ex, eu imperdiet libero.
          Integer iaculis felis eget pellentesque tincidunt. Morbi maximus quam
          sem, sed sollicitudin arcu placerat vel. Donec laoreet orci et leo
          tempus, id efficitur justo congue. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent vitae maximus diam.
        </p>
        <p>
          Cras velit quam, dignissim in dictum varius, tempor sit amet purus.
          Integer finibus luctus porta. Vestibulum tempus, lacus nec auctor
          sodales, purus dui eleifend erat, quis condimentum ligula sapien ac
          orci. Fusce eget mollis lectus. Maecenas et mollis enim. Vestibulum
          sodales nisl sed viverra dapibus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          vitae lorem eget massa varius viverra quis vitae nulla. Morbi
          facilisis fringilla nibh in mollis. Sed lacus nulla, faucibus quis
          malesuada in, dignissim non sem. Nunc vel felis at orci egestas
          imperdiet quis id tortor. Morbi sed turpis quis ex accumsan
          condimentum vitae eget ligula. Sed eget vulputate nulla, sit amet
          vulputate nibh.
        </p>
      </section>

      <LastNews />

      <h2>History</h2>
      <section className={`${style.text} ${style.revert}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut enim
          quam. Mauris vel odio faucibus, consequat sapien ac, posuere sem.
          Phasellus sollicitudin eros nisl, ut eleifend ex varius nec. In
          feugiat orci sed turpis consequat, pellentesque elementum metus
          ornare. Phasellus commodo condimentum erat, ultricies dapibus felis
          laoreet quis. Ut pulvinar vitae lacus nec ullamcorper. Pellentesque
          sagittis efficitur nibh, ac convallis risus accumsan et. Nullam
          ullamcorper commodo pretium.
        </p>
        <p>
          Curabitur felis nulla, rutrum blandit velit nec, euismod malesuada
          nibh. Mauris diam odio, lacinia id tempus vel, congue a neque.
          Maecenas lacinia facilisis sapien eu tincidunt. Cras fringilla lacus
          nibh, vel malesuada purus bibendum non. Nulla posuere quam vel maximus
          sodales. Suspendisse potenti. Vivamus semper eros est, eget volutpat
          nisi tempus aliquam. Fusce non finibus ex, eu imperdiet libero.
          Integer iaculis felis eget pellentesque tincidunt. Morbi maximus quam
          sem, sed sollicitudin arcu placerat vel. Donec laoreet orci et leo
          tempus, id efficitur justo congue. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Praesent vitae maximus diam.
        </p>
        <p>
          Cras velit quam, dignissim in dictum varius, tempor sit amet purus.
          Integer finibus luctus porta. Vestibulum tempus, lacus nec auctor
          sodales, purus dui eleifend erat, quis condimentum ligula sapien ac
          orci. Fusce eget mollis lectus. Maecenas et mollis enim. Vestibulum
          sodales nisl sed viverra dapibus. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
          vitae lorem eget massa varius viverra quis vitae nulla. Morbi
          facilisis fringilla nibh in mollis. Sed lacus nulla, faucibus quis
          malesuada in, dignissim non sem. Nunc vel felis at orci egestas
          imperdiet quis id tortor. Morbi sed turpis quis ex accumsan
          condimentum vitae eget ligula. Sed eget vulputate nulla, sit amet
          vulputate nibh.
        </p>
      </section>
    </div>
  );
}
