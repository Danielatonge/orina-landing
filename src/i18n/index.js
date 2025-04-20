import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
            features: 'Features',
            about: 'About',
            pricing: 'Pricing',
            contact: 'Contact',
            signIn: 'Sign In',
            getStarted: 'Get Started'
        },
        hero: {
            title: 'Your Salon, Just a Tap Away.',
            subtitle: "A smarter, simpler way to book salon appointments and manage beauty businesses. Whether you're getting styled or managing the salon—Orina connects you in seconds.",
            getStarted: 'Get Started',
            bookDemo: 'Book a Demo',
            joinOthers: '✨ Join 500+ salons already waiting to transform their business',
            bookInSeconds: '🚀 Book in 30 seconds',
            rating: '⭐️ 4.9/5 Rating',
        },
        features: {
            title: 'Experience the Difference',
            subtitle: 'Discover how Orina transforms your salon experience with powerful features for both customers and beauty salons.',
            forCustomers: {
                title: 'For Customers',
                find: {
                    title: 'Find Your Perfect Salon',
                    desc: 'Browse top-rated salons near you, read reviews, and explore their signature styles.'
                },
                book: {
                    title: 'Lightning-Fast Booking',
                    desc: 'Book your favorite stylist in seconds, with real-time availability and instant confirmation.'
                },
                notify: {
                    title: 'Never Miss an Appointment',
                    desc: 'Smart reminders, calendar sync, and instant updates keep you perfectly on schedule.'
                },
                gallery: {
                    title: 'Inspiration Gallery',
                    desc: 'Create your style wishlist and share inspiration directly with your stylist.'
                },
                payments: {
                    title: 'Effortless Payments',
                    desc: 'Skip the checkout line with secure digital payments and split-payment options.'
                }
            },
            forSalons: {
                title: 'For Salons',
                management: {
                    title: 'Smart Business Management',
                    desc: 'Manage appointments, staff schedules, and client relationships from one powerful dashboard.'
                },
                analytics: {
                    title: 'Analytics & Insights',
                    desc: 'Track revenue, popular services, and customer satisfaction with real-time analytics.'
                },
                notifications: {
                    title: 'Automated Notifications',
                    desc: 'Reduce no-shows with automated reminders and booking confirmations.'
                },
                payments: {
                    title: 'Payment Processing',
                    desc: 'Accept deposits, process payments, and manage refunds with ease.'
                },
                marketing: {
                    title: 'Marketing Tools',
                    desc: 'Grow your business with integrated marketing tools and customer loyalty programs.'
                }
            }
        },
        journey: {
            title: '✨ Your Beauty Journey Starts Here',
            subtitle: 'From idea to implementation: how we created Orina for convenience and efficiency in beauty salons.',
            step1: {
                title: 'Discover',
                desc: 'Find your perfect match from our curated network of top-rated salons and expert stylists who align with your unique style and preferences.'
            },
            step2: {
                title: 'Book',
                desc: 'Schedule your appointment in seconds with our intuitive booking system. Pick your time, service, and stylist—all with just a few taps.'
            },
            step3: {
                title: 'Experience',
                desc: 'Enjoy a seamless salon visit with digital check-in, style sharing, and contactless payments. Your perfect look awaits!'
            },
            step4: {
                title: 'Share & Grow',
                desc: 'Join our beauty community. Share your experience, earn rewards, and discover new styles and trends from fellow beauty enthusiasts.'
            }
        },
        finalNote: {
            title: '🧡 Inspired by the best, built for you.',
            desc: '"Think Fresha, but reimagined for flexibility and speed."',
            explore: 'Explore the new standard in salon scheduling.'
        },
        footer: {
            description: 'Transforming the beauty industry with seamless scheduling and business management solutions.',
            contact: 'Contact Us',
            follow: 'Follow Us',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
        },
        contact: {
            title: '📲 Get in Touch',
            subtitle: 'Have questions or feedback? We\'d love to hear from you.',
            sales: 'Sales Inquiries',
            support: 'Technical Support',
            partnership: 'Partnership Opportunities',
            privacy: '🔒 Your information is safe with us. We respect your privacy.'
        },
        sponsored: {
            title: 'Project created with the support of the Federal State Budgetary Institution "Foundation for the Development of Small and Medium-Sized Enterprises in the Scientific and Technical Sphere" within the framework of the "Student Startup" federal project "Platform of University Technological Entrepreneurship"'
        },
        pricing: {
            title: 'Simple, Transparent Pricing',
            subtitle: 'Choose the perfect plan for your salon. No hidden fees, no surprises.',
            period: 'month',
            basic: {
                title: 'Basic',
                price: '700',
                features: {
                    1: 'Up to 5 staff members',
                    2: 'Basic appointment scheduling',
                    3: 'Email support'
                },
                cta: 'Get Started'
            },
            pro: {
                title: 'Professional',
                popular: 'Most Popular',
                price: '1600',
                features: {
                    1: 'Unlimited staff members',
                    2: 'Advanced scheduling features',
                    3: 'Client management tools',
                    4: 'Priority support'
                },
                cta: 'Start Free Trial'
            },
            enterprise: {
                title: 'Enterprise',
                price: 'Custom',
                features: {
                    1: 'Custom integrations',
                    2: 'Dedicated account manager',
                    3: 'API access',
                    4: '24/7 premium support'
                },
                cta: 'Contact Sales'
            }
        }
    },
    ru: {
        nav: {
            features: 'Функции',
            about: 'О нас',
            pricing: 'Цены',
            contact: 'Контакты',
            signIn: 'Войти',
            getStarted: 'Начать'
        },
        hero: {
            title: 'Ваш салон на расстоянии одного клика.',
            subtitle: 'Умный и простой способ записаться в салон красоты и управлять бьюти-бизнесом. Будь вы клиентом или владельцем салона — Orina соединяет вас за считанные секунды.',
            getStarted: 'Начать',
            bookDemo: 'Заказать демо',
            joinOthers: '✨ Присоединитесь к 500+ салонам, готовым к трансформации своего бизнеса',
            bookInSeconds: '🚀 Запишитесь за 30 секунд',
            rating: '⭐️ 4.9/5 Рейтинг'
        },
        features: {
            title: 'Ощутите разницу',
            subtitle: 'Узнайте, как Orina преображает работу вашего салона с помощью мощных функций как для клиентов, так и для салонов красоты.',
            forCustomers: {
                title: 'Для клиентов',
                find: {
                    title: 'Найдите свой идеальный салон',
                    desc: 'Просмотрите лучшие салоны в вашем районе, прочитайте отзывы и изучите их уникальные стили.'
                },
                book: {
                    title: 'Молниеносная бронирование',
                    desc: 'Запишитесь на любимого стилиста за считанные секунды, с реальным временем и моментальным подтверждением.'
                },
                notify: {
                    title: 'Никогда не пропустите встречу',
                    desc: 'Умные напоминания, синхронизация календаря и моментальные обновления помогают вам оставаться на счету.'
                },
                gallery: {
                    title: 'Галерея вдохновения',
                    desc: 'Создайте свой список желаний и делитесь вдохновением напрямую со своим стилистом.'
                },
                payments: {
                    title: 'Легкие платежи',
                    desc: 'Пропустите очередь на кассе с безопасными цифровыми платежами и опциями разделения платежа.'
                }
            },
            forSalons: {
                title: 'Для салонов',
                management: {
                    title: 'Умная система управления бизнесом',
                    desc: 'Управляйте бронированиями, расписанием персонала и отношениями с клиентами из одного мощного панели управления.'
                },
                analytics: {
                    title: 'Аналитика и отчеты',
                    desc: 'Отслеживайте доход, популярные услуги и удовлетворенность клиентов с помощью реальных аналитических данных.'
                },
                notifications: {
                    title: 'Автоматические уведомления',
                    desc: 'Снижайте пропуски бронирований с помощью автоматических напоминаний и подтверждений бронирований.'
                },
                payments: {
                    title: 'Обработка платежей',
                    desc: 'Принимайте депозиты, обрабатывайте платежи и управляйте возвратами с легкостью.'
                },
                marketing: {
                    title: 'Инструменты маркетинга',
                    desc: 'Расширяйте свою клиентскую базу с помощью интегрированных инструментов маркетинга и программ лояльности клиента.'
                }
            }
        },
        journey: {
            title: '✨ Ваше Путешествие к красоте Начинается здесь',
            subtitle: 'От идеи до реализации: как мы создали Orina для удобства и эффективности в салонах красоты.',
            step1: {
                title: 'Найдите',
                desc: 'Найдите свой идеальный салон от нашей отфильтрованной сети лучших салонов и экспертных стилистов, которые соответствуют вашему уникальному стилю и предпочтениям.'
            },
            step2: {
                title: 'Запишитесь',
                desc: 'Запишитесь на любимого стилиста за считанные секунды с нашей интуитивной системой бронирования. Выберите время, услугу и стилиста — все с помощью нескольких щелчков.'
            },
            step3: {
                title: 'Опыт',
                desc: 'Наслаждайтесь безупречным салоном с цифровой проверкой входа, делитесь стилями и оплачивайте контактно.'
            },
            step4: {
                title: 'Поделитесь и растите',
                desc: 'Присоединитесь к нашей красочной сообщества. Поделитесь своим опытом, зарабатывайте награды и откройте для себя новые стили и тренды от других красот.'
            }
        },
        finalNote: {
            title: '🧡 Вдохновлен лучшими, построен для вас.',
            desc: '"Подумайте Fresha, но переосмыслите ее для повышения гибкости и скорости."',
            explore: 'Исследуйте новый стандарт в бронировании салонов.'
        },
        footer: {
            description: 'Преобразуя индустрию красоты с помощью удобного планирования и управления бизнесом.',
            contact: 'Свяжитесь с нами',
            follow: 'Следуйте за нами',
            rights: 'Все права защищены.',
            privacy: 'Политика конфиденциальности',
            terms: 'Условия использования'
        },
        contact: {
            title: '📲 Свяжитесь с нами',
            subtitle: 'Есть вопросы или отзывы? Мы будем рады услышать вас.',
            sales: 'Вопросы по продажам',
            support: 'Техническая поддержка',
            partnership: 'Возможности партнерства',
            privacy: '🔒 Ваши данные в безопасности. Мы уважаем вашу конфиденциальность.'
        },
        sponsored: {
            title: 'Проект создан при поддержке Федерального государственного бюджетного учреждения «Фонд содействия развитию малых форм предприятий в научно-технической сфере» в рамках программы «Студенческий стартап» федерального проекта «Платформа университетского технологического предпринимательства»'
        },
        pricing: {
            title: 'Простая и прозрачная цена',
            subtitle: 'Выберите идеальный план для вашего салона. Без скрытых платежей и сюрпризов.',
            period: 'месяц',
            basic: {
                title: 'Базовый',
                price: '700',
                features: {
                    1: 'До 5 сотрудников',
                    2: 'Базовое расписание',
                    3: 'Поддержка по email'
                },
                cta: 'Начать'
            },
            pro: {
                title: 'Профессиональный',
                popular: 'Самый популярный',
                price: '1600',
                features: {
                    1: 'Неограниченное количество сотрудников',
                    2: 'Расширенные функции планирования',
                    3: 'Инструменты управления клиентами',
                    4: 'Приоритетная поддержка'
                },
                cta: 'Начать бесплатный период'
            },
            enterprise: {
                title: 'Корпоративный',
                price: 'Индивидуально',
                features: {
                    1: 'Индивидуальные интеграции',
                    2: 'Персональный менеджер',
                    3: 'Доступ к API',
                    4: 'Премиум поддержка 24/7'
                },
                cta: 'Связаться с отделом продаж'
            }
        }
    }
}

export const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'ru',
    messages
}) 