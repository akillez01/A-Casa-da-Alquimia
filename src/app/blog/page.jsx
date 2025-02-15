import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.length > 0 ? (
        data.map((item) => (
          <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Blog;