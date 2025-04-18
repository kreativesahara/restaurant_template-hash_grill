import { useEffect } from "react";
import termsContent from "../../data/termsContent";

const Terms = () => {
    useEffect(() => {
        document.title = "Terms | Hash Grill";
    }, []);
    return (
        <main className="terms">
            <h2>Terms & Conditions</h2>
            <p>Welcome to Hash Grill. These Terms of Service outline the rules and guidelines for using our website and services. By accessing or using our website, you agree to abide by these terms. Please read them carefully before proceeding.</p>
            {termsContent.map((content) =>
                <section key={content.title}>
                    <h3>{content.id}. {content.title}:</h3>
                    <p>{content.content}</p>
                </section>)}
        </main>
    )
}

export default Terms;