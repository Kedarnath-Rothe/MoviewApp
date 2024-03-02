import ContactForm from "@/app/components/ContactForm";
import styles from "./contact.module.css";
const page = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1> 

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <div className={styles.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5317192600673!2d73.88285357496137!3d18.45955908262222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf47d15ce33%3A0x8098faf1b47cc4ba!2sVishwakarma%20Institute%20of%20Information%20Technology%2C%20Survey%20No.%202%2F3%2F4%2C%20VIM%20Private%20Rd%2C%20Kapil%20Nagar%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1709405540390!5m2!1sen!2sin"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div> 

        </>
    );
};

export default page;