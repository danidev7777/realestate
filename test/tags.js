import "dotenv/config"
import axios from "axios"

const tags = [
  { name: "New Listings", count: 355, image: "image5.jpg", link: "/new-listings" },
  { name: "Price Reduced", count: 242, image: "image6.jpg", link: "/price-reduced" },
  { name: "Open Houses", count: 39, image: "image7.jpg", link: "/open-houses" },
  { name: "Recently Sold", count: 933, image: "image8.jpg", link: "/recently-sold" },
  { name: "Recommended Homes", count: 19, image: "image9.jpg", link: "/recommended-homes" },
  { name: "New Construction", count: 260, image: "image10.jpg", link: "/new-construction" },
  { name: "New Home Communities", count: 24, image: "image11.jpg", link: "/new-home-communities" },
  { name: "Land", count: 64, image: "image12.jpg", link: "/land" }
]

tags.forEach(tag => {
  // console.log("tag", tag)
  const newTag = axios.post(`${process.env.HOUSE_SERVER}/tags`, tag).then(t => console.log(t.data))
})