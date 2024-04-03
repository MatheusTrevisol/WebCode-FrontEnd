import "./styles.scss";

const banners = [
  {id: 1, image: "images/banners/banner-pequeno.png"},
  {id: 1, image: "images/banners/banner-grande.png"},
]

export function NavBanners() {
  return (
    <div>
      <div>
        <img src={banners[0].image} alt="" />
      </div>
      <div>
        <img src={banners[1].image} alt="" />
      </div>
    </div>
  );
}