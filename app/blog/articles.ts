export type Article = {
    slug: string;
    category: string;
    title: string;
    image: string;
    content: string;
};

export const ARTICLES: Article[] = [
    {
        slug: "healthy-foods",
        category: "NUTRITION",
        title: "10 Healthy Foods Every Pregnant Woman Should Eat",
        image: "/assets/images/nutrition.png",
        content:
            "Eating well during pregnancy doesn't have to be complicated. Focus on whole foods like leafy greens, beans, eggs, dairy, and fatty fish for key nutrients such as folate, iron, calcium, and omega-3s. Small, balanced meals throughout the day can also help manage nausea and energy levels. Always check with your doctor before starting any new supplement.",
    },
    {
        slug: "safe-exercise",
        category: "WELLNESS",
        title: "Safe Exercise During Pregnancy",
        image: "/assets/images/wellness.png",
        content:
            "Staying active during pregnancy can ease common discomforts and prepare your body for labor. Low-impact options like walking, swimming, prenatal yoga, and light strength training are generally considered safe for most pregnancies. Listen to your body, stay hydrated, and avoid exercises that involve lying flat on your back after the first trimester or carry a high risk of falling.",
    },
    {
        slug: "hospital-bag",
        category: "PREPARATION",
        title: "Preparing Your Hospital Bag: A Complete Checklist",
        image: "/assets/images/preparation.png",
        content:
            "Packing your hospital bag by your third trimester can bring peace of mind. Include your ID and insurance documents, comfortable clothing, toiletries, a phone charger, and going-home outfits for both you and baby. Don't forget snacks for after delivery and any comfort items that help you relax, like a favorite pillow or playlist.",
    },
];
