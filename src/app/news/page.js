
import styles from "@/app/styles/common.module.css";
import NewsCard from "../components/NewsCard";

const page = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.NEWS_API;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '33d954cf0emsh7ab0a6d288ae094p1c66d9jsn411aa35324f2',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(data);

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movies</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <NewsCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;