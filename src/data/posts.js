import top_beauty from "../assets/blog/top-beauty-trends.png";
import salon_business from "../assets/blog/salon-business.png";
import beauty_tips from "../assets/blog/beauty-tips.png";
import beauty_tech from "../assets/blog/beauty-tech.png";
import beauty_brands from "../assets/blog/beauty-brands.png";


export const posts = [
    {
        id: 1,
        slug: "top-beauty-trends-2024",
        title: "Top Beauty Trends for 2024",
        content: {
            overview: `2025 is redefining beauty—think bolder, smarter, and more conscious. From AI-powered
            routines to skin-first philosophies, this year's trends are all about embracing individuality,
             technology, and sustainability. Here are the top beauty trends to watch and try in 2025:`,
            sections: [
                {
                    title: "AI-Driven Personal Beauty",
                    icon: "💋",
                    content: `Artificial Intelligence is taking center stage in skincare and cosmetics. Expect 
                    personalized product recommendations, virtual makeup try-ons, and AI-enhanced skin analysis that adapt 
                    to your unique features and daily habits. Try This: Smart beauty apps that scan your skin and suggest 
                    custom serums or routines.`,
                },
                {
                    title: "Skinimalism 2.0",
                    icon: "🧴",
                    content: `Less is more—again. But in 2025, skinimalism is enhanced by multi-functional products powered 
                    by biotech ingredients. People are embracing a cleaner, pared-down routine focused on healthy, glowing skin rather than layers of makeup.
Try This: A tinted SPF moisturizer with peptides and antioxidants.`,
                },
                {
                    title: "Blue Beauty & Sustainability",
                    icon: "♻️",
                    content: `Eco-conscious beauty is evolving into “blue beauty”—products that not only avoid harming the environment but actively help restore 
                    it. Brands are cutting down on plastic, using reef-safe formulas, and supporting ocean cleanup efforts.
Try This: Brands with refillable packaging and biodegradable ingredients.`,
                }
            ],
            quote: {
                text: "Beauty is about being comfortable in your own skin. It's about knowing and accepting who you are.",
                author: "Ellen DeGeneres"
            },
            takeaways: [
                { title: "Sustainability", description: "is no longer optional" },
                { title: "Technology", description: "is transforming the industry" },
                { title: "Inclusivity", description: "is driving innovation" }
            ]
        },
        category: "trends",
        image: top_beauty,
        date: "2025-03-15",
        author: {
            name: "Orina Team",
            avatar: "/blog/authors/sarah.jpg",
            role: "Beauty Industry Experts"
        }
    },
    {
        id: 2,
        slug: "build-successful-salon-business",
        title: "How to Build a Successful Salon Business",
        content: {
            overview: `Launching and running a successful salon is more than just offering haircuts or nail treatments — it’s about 
            building a brand, creating an experience, and understanding your clients’ needs. Whether you’re starting from scratch or 
            looking to grow your current business, this guide will walk you through the key ingredients for long-term salon success.`,
            sections: [
                {
                    title: "Start with a Clear Vision",
                    icon: "🔍",
                    content: "Before opening your doors, define what kind of salon you want to build:",
                    list: [
                        "Will you focus on hair, nails, skincare, or offer all services?",
                        "Who is your ideal client — busy professionals, students, families, or luxury seekers?",
                        "What makes your salon unique?",
                    ]
                },
                {
                    title: "Create a Business Plan",
                    icon: "📋",
                    content: "A strong business plan sets the foundation for growth. Include:",
                    list: [
                        "Market research (competition, customer demand)",
                        "Service offerings and pricing",
                        "Marketing and sales strategy",
                        "Budget and financial projections",
                        "Staffing and hiring plans"
                    ]
                },
                {
                    title: "Choose the Right Location",
                    icon: "🏪",
                    content: "Your salon’s location can make or break your business. Aim for:",
                    list: [
                        "High foot traffic areas (shopping centers, business districts)",
                        "Easy access with parking or public transportation",
                        "Visibility from the street",
                        "Proximity to your target clientele"
                    ]
                },
                {
                    title: "Staff Management",
                    icon: "👥",
                    content: "Your team is your greatest asset. Here's how to build and maintain a great team:",
                    list: [
                        "Clear job descriptions and expectations",
                        "Competitive compensation packages",
                        "Ongoing training and development",
                        "Positive work culture"
                    ]
                }
            ],
            quote: {
                text: "Success in the beauty industry isn't just about technical skills—it's about creating an experience that keeps clients coming back.",
                author: "Michael Chen, Salon Business Consultant"
            },
            takeaways: [
                { title: "Vision", description: "defines the direction and goals of your salon business" },
                { title: "Proper Planning", description: "ensures a strong foundation for your business" },
                { title: "Strategic Location", description: "plays a vital role in attracting and retaining customers" },
                { title: "Effective Team Management", description: "fosters a positive work environment and drives growth" }
            ]
        },
        category: "business",
        image: salon_business,
        date: "2024-03-10",
        author: {
            name: "Orina Team",
            avatar: "/blog/authors/michael.jpg",
            role: "Salon Business Consultant"
        }
    },
    {
        id: 3,
        slug: "beauty-tips-busy-professionals",
        title: "5 Essential Beauty Tips for Busy Professionals",
        content: {
            overview: `In today’s fast-paced world, maintaining a polished appearance can feel like a challenge. Between back-to-back meetings, 
            long commutes, and personal responsibilities, it’s easy to let self-care slip down the priority list. But looking and feeling your 
            best doesn’t have to take hours. Here are five practical, time-saving beauty tips tailored specifically for busy professionals.`,
            sections: [
                {
                    title: "Quick Morning Routine",
                    icon: "🌅",
                    content: `Streamline your morning with multi-use products. Opt for a tinted moisturizer with SPF, a cream blush that doubles 
                    as lipstick, and a brow gel to frame your face. Focus on enhancing, not transforming, your natural features. Keep a minimalist 
                    makeup bag ready for on-the-go touch-ups.`,
                    list: [
                        "Gentle cleanser and toner",
                        "Lightweight moisturizer with SPF",
                        "Quick makeup essentials",
                        "Hair styling in 5 minutes"
                    ]
                },
                {
                    title: "Office-Ready Makeup",
                    icon: "💄",
                    content: `A small pouch at your desk can be a lifesaver. Include essentials like dry shampoo, blotting papers, deodorant wipes, 
                    a compact mirror, and a lip balm. This quick-access kit helps you freshen up before an impromptu Zoom call or after a hectic commute.`,
                    list: [
                        "Long-wear foundation",
                        "Neutral eyeshadow palette",
                        "Waterproof mascara",
                        "Lip color that lasts"
                    ]
                },
                {
                    title: "Evening Recovery",
                    icon: "🌙",
                    content: `Let your skincare work while you sleep. Use overnight masks, serums with retinol or hyaluronic acid, and nourishing hair 
                    masks once or twice a week. These products maximize results with zero extra time spent during your day. Essential steps to maintain 
                    your skin's health:`,
                    list: [
                        "Thorough makeup removal",
                        "Hydrating night cream",
                        "Weekly exfoliation",
                        "Regular face masks"
                    ]
                }
            ],
            quote: {
                text: "The key to looking professional isn't about spending hours on your appearance—it's about having a streamlined routine that works for you.",
                author: "Emma Rodriguez, Beauty Editor"
            },
            takeaways: [
                { title: "Efficiency", description: "is key for busy professionals" },
                { title: "Quality", description: "products save time in the long run" },
                { title: "Consistency", description: "in your routine is essential" }
            ]
        },
        category: "tips",
        image: beauty_tips,
        date: "2024-03-05",
        author: {
            name: "Orina Team",
            avatar: "/blog/authors/emma.jpg",
            role: "Beauty Editor"
        }
    },
    {
        id: 4,
        slug: "future-of-beauty-tech",
        title: "The Future of Beauty Technology: AI and Beyond",
        content: {
            overview: `The beauty industry is undergoing a transformation like never before. Fueled by rapid advancements in artificial 
            intelligence (AI), augmented reality (AR), and personalization technologies, beauty tech is no longer just about skincare 
            apps or salon scheduling. It’s about intelligent ecosystems that understand, adapt, and evolve with each user — and we’re 
            just getting started.`,
            sections: [
                {
                    title: "AI-Powered Beauty",
                    icon: "🤖",
                    content: `AI is revolutionizing product recommendations and skincare analysis. Tools powered by computer vision can now analyze 
                    selfies to assess skin conditions, recommend routines, and even simulate aging effects. Brands like L’Oréal and Neutrogena are 
                    already using AI to deliver hyper-personalized solutions. In the near future, expect AI to know your skin better than you do — 
                    adapting your routine in real-time based on weather, stress levels, and health.
                    Artificial Intelligence is revolutionizing personal care:`,
                    list: [
                        "Smart skin analysis devices",
                        "Personalized product recommendations",
                        "Virtual try-on technology",
                        "Automated beauty routines"
                    ]
                },
                {
                    title: "Augmented Reality",
                    icon: "👓",
                    content: `No more guessing how that bold lipstick shade or balayage hair color will look. AR allows users to try on products virtually 
                    in real-time, boosting confidence in online purchases and reducing product waste. As AR becomes more immersive, expect entire 
                    virtual beauty consultations, AI stylists, and AR-powered tutorials tailored to your face shape and features.
                    AR is changing how we experience beauty:`,
                    list: [
                        "Virtual makeup testing",
                        "Hair color simulation",
                        "Real-time style advice",
                        "Interactive beauty tutorials"
                    ]
                },
                {
                    title: "Smart Beauty Devices",
                    icon: "💡",
                    content: `From skin-analyzing mirrors to connected cleansing brushes, beauty hardware is getting smarter. These devices gather data, 
                    track progress, and integrate with mobile apps to offer insights and coaching. With the rise of IoT (Internet of Things), we’re 
                    looking at a future where your mirror can book a salon appointment, reorder your favorite serum, or offer mood-based makeup tips.
                    Connected devices are making beauty routines smarter:`,
                    list: [
                        "IoT-enabled skincare tools",
                        "Smart mirrors with analysis",
                        "Automated makeup applicators",
                        "Environmental monitoring for skin health"
                    ]
                }
            ],
            quote: {
                text: "Technology isn't replacing the human touch in beauty—it's enhancing our ability to provide personalized care at scale.",
                author: "Dr. Lisa Chen, Beauty Tech Researcher"
            },
            takeaways: [
                { title: "AI", description: "enhances personalization in beauty" },
                { title: "AR", description: "transforms product testing experiences" },
                { title: "IoT", description: "introduces intelligent beauty routines" }
            ]
        },
        category: "trends",
        image: beauty_tech,
        date: "2024-03-01",
        author: {
            name: "Orina Team",
            avatar: "/blog/authors/lisa.jpg",
            role: "Beauty Tech Researcher"
        }
    },
    {
        id: 5,
        slug: "salon-marketing-strategies",
        title: "Effective Marketing Strategies for Modern Salons",
        content: {
            overview: `2025 is redefining beauty—think bolder, smarter, and more conscious. From AI-powered
            routines to skin-first philosophies, this year's trends are all about embracing individuality,
             technology, and sustainability. Here are the top beauty trends to watch and try in 2025:`,
            sections: [
                {
                    title: "Digital Presence",
                    icon: "🌐",
                    content: "Building a strong online presence is crucial:",
                    list: [
                        "Professional website with booking system",
                        "Active social media engagement",
                        "Google Business optimization",
                        "Online review management"
                    ]
                },
                {
                    title: "Content Marketing",
                    icon: "📱",
                    content: "Create valuable content to attract clients:",
                    list: [
                        "Beauty tips and tutorials",
                        "Before and after transformations",
                        "Expert advice columns",
                        "Client success stories"
                    ]
                },
                {
                    title: "Loyalty Programs",
                    icon: "💎",
                    content: "Build a loyal client base:",
                    list: [
                        "Membership rewards system",
                        "Referral incentives",
                        "Birthday specials",
                        "Seasonal promotions"
                    ]
                }
            ],
            quote: {
                text: "In today's digital age, your salon's online presence is as important as your physical location.",
                author: "Sarah Martinez, Salon Marketing Expert"
            },
            takeaways: [
                { title: "Digital", description: "presence is non-negotiable" },
                { title: "Content", description: "builds trust and authority" },
                { title: "Loyalty", description: "drives repeat business" }
            ]
        },
        category: "business",
        image: "/blog/salon-marketing.jpg",
        date: "2024-02-28",
        author: {
            name: "Sarah Martinez",
            avatar: "/blog/authors/sarah-m.jpg",
            role: "Salon Marketing Expert"
        }
    },
    {
        id: 6,
        slug: "natural-beauty-routine",
        title: "Creating a Natural Beauty Routine That Works",
        content: {
            overview: `2025 is redefining beauty—think bolder, smarter, and more conscious. From AI-powered
            routines to skin-first philosophies, this year's trends are all about embracing individuality,
             technology, and sustainability. Here are the top beauty trends to watch and try in 2025:`,
            sections: [
                {
                    title: "Skin Care Basics",
                    icon: "🌿",
                    content: "Start with these essential natural steps:",
                    list: [
                        "Gentle cleansing with natural ingredients",
                        "Hydration with plant-based products",
                        "Natural exfoliation methods",
                        "Herbal toners and essences"
                    ]
                },
                {
                    title: "Natural Makeup",
                    icon: "🌸",
                    content: "Switch to clean beauty products:",
                    list: [
                        "Mineral-based foundations",
                        "Natural lip and cheek tints",
                        "Plant-based mascaras",
                        "Organic setting powders"
                    ]
                },
                {
                    title: "DIY Treatments",
                    icon: "🧪",
                    content: "Simple homemade beauty solutions:",
                    list: [
                        "Facial masks from kitchen ingredients",
                        "Natural hair treatments",
                        "Herbal steam facials",
                        "DIY body scrubs"
                    ]
                }
            ],
            quote: {
                text: "Natural beauty isn't about perfection—it's about enhancing your unique features with clean, sustainable products.",
                author: "Emma Green, Natural Beauty Expert"
            },
            takeaways: [
                { title: "Simplicity", description: "is key to natural beauty" },
                { title: "Ingredients", description: "matter more than brands" },
                { title: "Consistency", description: "yields the best results" }
            ]
        },
        category: "tips",
        image: "/blog/natural-beauty.jpg",
        date: "2024-02-25",
        author: {
            name: "Emma Green",
            avatar: "/blog/authors/emma-g.jpg",
            role: "Natural Beauty Expert"
        }
    },
    {
        id: 7,
        slug: "sustainable-beauty-brands",
        title: "Top Sustainable Beauty Brands Making a Difference",
        content: {
            overview: `In a world where consumers are increasingly conscious of their environmental impact, the beauty industry 
            is evolving—one sustainable step at a time. From eco-friendly packaging to cruelty-free formulas, a new wave of beauty 
            brands is proving that glam and green can go hand in hand. Here are some of the top sustainable beauty brands making a 
            real difference:`,
            sections: [
                {
                    title: "Lush Cosmetics",
                    icon: "🌿",
                    content: `Lush has long been a pioneer in the eco-beauty movement. With its commitment to fresh, handmade products, 
                    Lush minimizes packaging waste through their “naked” product line and uses recycled materials when packaging is necessary.
Sustainability efforts:`,
                    list: [
                        "100% vegetarian products",
                        "Zero animal testing",
                        "In-store recycling program"
                    ]
                },
                {
                    title: "Tata Harper",
                    icon: "💧",
                    content: `Tata Harper is synonymous with luxury and sustainability. All products are made on the brand’s own Vermont farm using natural ingredients and eco-friendly production methods.

Sustainability efforts:`,
                    list: [
                        "Farm-to-face ingredients",
                        "Glass packaging",
                        "Carbon neutral shipping"
                    ]
                },
                {
                    title: "Herbivore Botanicals",
                    icon: "🐰",
                    content: `With minimalistic design and plant-based formulas, Herbivore Botanicals combines performance with planet-friendly values. Their products are free from synthetic ingredients and animal testing.

Sustainability efforts:`,
                    list: [
                        "Recyclable glass containers",
                        "Ethically sourced ingredients",
                        "No synthetic preservatives",
                    ]
                }
            ],
            quote: {
                text: "Sustainability in beauty isn't just a trend—it's a responsibility that forward-thinking brands are embracing.",
                author: "Dr. Maya Patel, Sustainable Beauty Analyst"
            },
            takeaways: [
                { title: "Packaging", description: "can be both beautiful and sustainable" },
                { title: "Ingredients", description: "should be clean and ethical" },
                { title: "Practices", description: "must align with values" }
            ]
        },
        category: "trends",
        image: beauty_brands,
        date: "2024-02-20",
        author: {
            name: "Orina Team",
            avatar: "/blog/authors/maya.jpg",
            role: "Sustainable Beauty Analyst"
        }
    }
]

export const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug)
}

export const getRelatedPosts = (currentPost, limit = 2) => {
    return posts
        .filter(post => post.id !== currentPost.id && post.category === currentPost.category)
        .slice(0, limit)
} 