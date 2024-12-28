import i18n from "i18next";
import { initReactI18next } from "react-i18next";

interface TranslationResources {
  service: {
    readl: string;
    readM: string;
  };
  form: {
    title: string;
    name: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    placeholderName: string;
    placeholderLastName: string;
    placeholderEmail: string;
    placeholderPhone: string;
    placeholderMessage: string;
    submit: string;
    successMessage: string;
  };
  Header: {
    NavLink1: string;
    NavLink2: string;
    NavLink3: string;
    NavLink4: string;
    NavLink5: string;
    NavLink6: string;
    Logout: string;
  };
  Home: {
    bannerTitle: string;
    exploreButton: string;
    moreButton: string;
    architectureTitle: string;
    architectureDescription: string;
    nutritionTitle: string;
    nutritionDescription: string;
    developmentTitle: string;
    developmentDescription: string;
    testimonialsTitle: string;
    Ttestimonial1: string;
    Ttestimonial2: string;
    Ttestimonial3: string;
    testimonial1: string;
    testimonial2: string;
    testimonial3: string;
    testimonial4: string;
  };
  Footer:{
    about: string;
    contact: string;
    follow: string;
    aboutText: string;
    address: string;
    phone: string;
    email: string;
    facebook: string;
    twitter: string;
    instagram: string;
    copyright: string;
  };
  Development: {
    bannerText: string;
    servicesTitle: string;
    mobileAppTitle: string;
    mobileAppDescription: string;
    webDevTitle: string;
    webDevDescription: string;
    ecommerceTitle: string;
    ecommerceDescription: string;
    consultingTitle: string;
    consultingDescription: string;
    backendTitle: string;
    backendDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    whatsappMessage: string;
  };
  Architecture: {
    bannerText: string;
    servicesTitle: string;
    sustainableTitle: string;
    sustainableDescription: string;
    interiorTitle: string;
    interiorDescription: string;
    landscapingTitle: string;
    landscapingDescription: string;
    consultingTitle: string;
    consultingDescription: string;
    proyectTitle: string;
    proyectDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  Nutrition: {
    bannerText: string;
    servicesTitle: string;
    personalizedConsultationTitle: string;
    personalizedConsultationDescription: string;
    mealPlansTitle: string;
    mealPlansDescription: string;
    weightControlTitle: string;
    weightControlDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
}

const resources: { [key: string]: { translation: TranslationResources } } = {
    en: {
      translation: {
        service: {
          readl: "Read less",
          readM: "Read More",
        },
        form: {
          title: "How can we help?",
          name: "Name",
          lastName: "Last Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          placeholderName: "John",
          placeholderLastName: "Doe",
          placeholderEmail: "john.doe@example.com",
          placeholderPhone: "+1 234 567 890",
          placeholderMessage: "I would like to know more about your services.",
          submit: "Send",
          successMessage: "Form submitted successfully!",
        },
        Header:{
          NavLink1: "Development",
          NavLink2: "Architecture",
          NavLink3: "Nutrition",
          NavLink4: "Contact",
          NavLink5: "Us",
          NavLink6: "Login",
          Logout: "Logout",

        },
        Home: {
          bannerTitle: "Sonartis offers you multiple solutions",
          exploreButton: "¡Explore!",
          moreButton:"More information",
          architectureTitle: "Sustainable architecture",
          architectureDescription:
            "At Sonartis S.A., we specialize in the creation of architectural projects oriented to sustainability and environmental care.",
          nutritionTitle: "Nutritionist",
          nutritionDescription:
            "At Sonartis S.A, we are committed to your health and wellness through a comprehensive and personalized approach to nutrition.",
          developmentTitle: "Development",
          developmentDescription:
            "At Sonartis S.A, we specialize in developing custom applications and websites that meet the specific needs of each client.",
          testimonialsTitle: "Previous customers",
          Ttestimonial1: "Incredible Results",
          Ttestimonial2: "Life-Changing Experience",
          Ttestimonial3: "Highly Recommended", 
          testimonial1: "The quality of the service is exceptional. From customer service to the execution of the project, everything was perfect. We will certainly recommend your services to others.",
          testimonial2: "Thanks to its advanced technological solutions, our company has significantly improved its efficiency. The architecture of our new workspaces is modern and functional - we are very happy with the results!",
          testimonial3: "The personalized nutrition plan you provided has made a huge difference in my life. I feel healthier and full of energy - great job, team!",
          testimonial4: "The integration of state-of-the-art technology into our architectural project exceeded our expectations. In addition, their nutritional advice has improved our overall well being and we are totally satisfied with their service!",
        },
        Footer:{
          about: "About us",
          contact: "Contact",
          follow: "Follow us",
          aboutText: "We innovate your environment with technology, architecture and nutrition for a balanced lifestyle.",
          address: "Address: Prolongación Antonio Sierra Mz.9 Lt.14 Zapotitlán, Tláhuac, CDMX, México",
          phone: "Phone: +52 55 3847 4506",
          email: "Email: info@sonartis.com.mx",
          facebook: "Facebook",
          twitter: "Twitter",
          instagram: "Instagram",
          copyright: "Sonartis S.A. all rights reserved ©.",
        },
        Development: {
          bannerText: "Innovation tailored to your needs",
          servicesTitle: "Services",
          mobileAppTitle: "Mobile App Development",
          mobileAppDescription: "We offer mobile application development services that cater to your specific needs. Our team of experts will work with you to create innovative and user-friendly mobile solutions that enhance your business operations and customer engagement.",
          webDevTitle: "Web Design and Development",
          webDevDescription: "Our web design and development services focus on creating visually appealing and functionally robust websites. We combine cutting-edge technologies with creative design to deliver websites that not only look great but also perform exceptionally.",
          ecommerceTitle: "E-commerce Solutions",
          ecommerceDescription: "We provide comprehensive e-commerce solutions to help you establish and grow your online business. From setting up your online store to implementing secure payment gateways, we ensure a smooth and efficient e-commerce experience for you and your customers.",
          consultingTitle: "Technology Consulting",
          consultingDescription: "Our technology consulting services offer expert guidance to help you navigate the complex world of IT. We provide insights on the latest technologies, help you make informed decisions, and develop strategies to leverage technology for your business growth.",
          backendTitle: "Backend Development and APIs",
          backendDescription: "We specialize in robust backend development and API creation. Our services ensure that your applications have a strong, scalable foundation and can efficiently communicate with other systems, enhancing overall performance and functionality.",
          ctaTitle: "Do you have something in mind?",
          ctaDescription: "Contact us to bring that idea to life or find a solution to the problem",
          ctaButton: "Contact Us",
          whatsappMessage: "Hello! I would like to know more about your development services.",
        },
        Architecture: {
          bannerText: "Building dreams while helping the planet",
          servicesTitle: "Services",
          sustainableTitle: "Urban Planning and Landscaping",
          sustainableDescription: "Our team of experts in urban planning and landscaping is dedicated to transforming outdoor spaces into vibrant and functional environments. We design innovative solutions that enhance the quality of life for communities, integrating natural and sustainable elements that promote biodiversity and natural beauty.",
          interiorTitle: "Remodeling and Renovation",
          interiorDescription: "Whether you want to renovate an existing space or update an old structure, our remodeling and renovation services are tailored to your specific needs. We help you revitalize your property with modern and efficient designs, ensuring that each project is completed with the highest quality and attention to detail.",
          landscapingTitle: "Energy Efficiency Consulting",
          landscapingDescription: "We offer energy efficiency consulting for new and existing projects. Our goal is to reduce energy consumption and operating costs through the implementation of innovative and sustainable solutions, such as renewable energy systems and high-efficiency insulation.",
          consultingTitle: "Sustainable Architectural Design",
          consultingDescription: "We use eco-friendly materials and advanced technologies to minimize environmental impact, ensuring that each project not only meets your needs but also respects and protects our planet.",
          proyectTitle: "Project Management",
          proyectDescription: "We coordinate all aspects of the construction process to ensure that your project is completed on time, within budget, and to the highest quality standards.",
          ctaTitle: "Ready to dream?",
          ctaDescription: "Contact us to make that idea come to life or find a solution to the problem",
          ctaButton: "Contact Us",
      },
      Nutrition: {
        bannerText: "Transform your life with healthy eating",
        servicesTitle: "Services",
        personalizedConsultationTitle: "Personalized Consultation",
        personalizedConsultationDescription: "We offer individual nutritional consultations where we analyze your current health status and eating habits. Together, we will develop strategies and action plans to improve your overall well-being and achieve your long-term health goals.",
        mealPlansTitle: "Meal Plans",
        mealPlansDescription: "Our personalized meal plans are designed to meet your unique nutritional needs. We work with you to create a plan that fits your health goals, tastes, and lifestyle, ensuring a balanced and delicious diet.",
        weightControlTitle: "Weight Control Advice",
        weightControlDescription: "Our weight control program helps you achieve and maintain a healthy weight through sustainable changes in your diet and lifestyle. We provide ongoing support and motivation to ensure your success on the path to better health.",
        ctaTitle: "Ready to transform your health?",
        ctaDescription: "Schedule an appointment with us and take the first step towards a healthier life.",
        ctaButton: "Schedule Appointments",
      },
    },
    
  },
    es: {
      translation: {
        service: {
          readl: "Leer menos",
          readM: "Leer Más",
        },
        form: {
          title: "¿Cómo podemos ayudarte?",
          name: "Nombre",
          lastName: "Apellido",
          email: "Correo Electrónico",
          phone: "Teléfono",
          message: "Mensaje",
          placeholderName: "Juan",
          placeholderLastName: "Pérez",
          placeholderEmail: "juan.perez@ejemplo.com",
          placeholderPhone: "+34 123 456 789",
          placeholderMessage: "Me gustaría saber más sobre sus servicios.",
          submit: "Enviar",
          successMessage: "¡Formulario enviado con éxito!",
        },
        Header:{
          NavLink1: "Desarrollo",
          NavLink2: "Arquitectura",
          NavLink3: "Nutrición",
          NavLink4: "Contactanos",
          NavLink5: "Nosotros",
          NavLink6: "Entrar",
          Logout: "Salir"
          
        },
        Home: {
          bannerTitle: "Sonartis te ofrece múltiples soluciones",
          exploreButton: "¡Explorar!",
          moreButton: "Más información",
          architectureTitle: "Arquitectura sostenible",
          architectureDescription:
            "En Sonartis S.A., nos especializamos en la creación de proyectos arquitectónicos orientados a la sostenibilidad y el cuidado del medio ambiente.",
          nutritionTitle: "Nutricionista",
          nutritionDescription:
            "En Sonartis S.A., estamos comprometidos con tu salud y bienestar a través de un enfoque integral y personalizado en la nutrición.",
          developmentTitle: "Desarrollo",
          developmentDescription:
            "En Sonartis S.A., nos especializamos en desarrollar aplicaciones y sitios web personalizados que satisfacen las necesidades específicas de cada cliente.",
          testimonialsTitle: "Clientes anteriores",
          Ttestimonial1: "Resultados increíbles",
          Ttestimonial2: "Una experiencia que cambia la vida",
          Ttestimonial3: "Muy recomendable", 
          testimonial1: "La calidad del servicio es excepcional. Desde la atención al cliente hasta la ejecución del proyecto, todo fue perfecto. Sin duda, recomendaremos sus servicios a otros.",
          testimonial2: "Gracias a sus soluciones tecnológicas avanzadas, nuestra empresa ha mejorado significativamente su eficiencia. La arquitectura de nuestros nuevos espacios de trabajo es moderna y funcional. ¡Estamos muy contentos con los resultados!",
          testimonial3: "El plan de nutrición personalizado que me proporcionaron ha hecho una gran diferencia en mi vida. Me siento más saludable y lleno de energía. ¡Gran trabajo, equipo!",
          testimonial4: "La integración de tecnología de punta en nuestro proyecto arquitectónico superó nuestras expectativas. Además, su asesoría en nutrición ha mejorado nuestro bienestar general. ¡Totalmente satisfechos con su servicio!"
        },
        Footer:{
          about: "Sobre nosotros",
          contact: "Contacto",
          follow: "Síguenos",
          aboutText: "Innovamos tu entorno con tecnología, arquitectura y nutrición para un estilo de vida equilibrado.",
          address: "Dirección: Prolongación Antonio Sierra Mz.9 Lt.14 Zapotitlán, Tláhuac, CDMX, México",
          phone: "Telefono: +52 55 3847 4506",
          email: "Correo: info@sonartis.com.mx",
          facebook: "Facebook",
          twitter: "Twitter",
          instagram: "Instagram",
          copyright: "Sonartis S.A. todos los derechos reservados ©",
        },
        Development: {
          bannerText: "Innovación a la medida de tus necesidades",
          servicesTitle: "Servicios",
          mobileAppTitle: "Desarrollo de aplicaciones móviles",
          mobileAppDescription: "Ofrecemos servicios de desarrollo de aplicaciones móviles que se adaptan a tus necesidades específicas. Nuestro equipo de expertos trabajará contigo para crear soluciones móviles innovadoras y fáciles de usar que mejoren tus operaciones comerciales y la participación de los clientes.",
          webDevTitle: "Diseño y Desarrollo Web",
          webDevDescription: "Nuestros servicios de diseño y desarrollo web se centran en crear sitios web visualmente atractivos y funcionalmente robustos. Combinamos tecnologías de vanguardia con diseño creativo para ofrecer sitios web que no solo se ven geniales, sino que también funcionan excepcionalmente.",
          ecommerceTitle: "Soluciones E-commerce",
          ecommerceDescription: "Proporcionamos soluciones integrales de comercio electrónico para ayudarte a establecer y hacer crecer tu negocio en línea. Desde la configuración de tu tienda en línea hasta la implementación de pasarelas de pago seguras, garantizamos una experiencia de comercio electrónico fluida y eficiente para ti y tus clientes.",
          consultingTitle: "Consultoría Tecnológica",
          consultingDescription: "Nuestros servicios de consultoría tecnológica ofrecen orientación experta para ayudarte a navegar por el complejo mundo de la TI. Proporcionamos información sobre las últimas tecnologías, te ayudamos a tomar decisiones informadas y desarrollamos estrategias para aprovechar la tecnología para el crecimiento de tu negocio.",
          backendTitle: "Desarrollo Backend y API's",
          backendDescription: "Nos especializamos en el desarrollo robusto de backend y la creación de API. Nuestros servicios aseguran que tus aplicaciones tengan una base sólida y escalable y puedan comunicarse eficientemente con otros sistemas, mejorando el rendimiento y la funcionalidad general.",
          ctaTitle: "¿Tienes algo en mente?",
          ctaDescription: "Contáctanos para darle vida a esa idea o encontrarle solución al problema",
          ctaButton: "Contáctanos",
          whatsappMessage: "¡Hola! Me gustaría saber más sobre sus servicios de desarrollo.",
        },
        Architecture: {
          bannerText: "Construimos sueños ayudando al planeta",
          servicesTitle: "Servicios",
          sustainableTitle: "Planeación Urbana y Paisajismo",
          sustainableDescription: "Nuestro equipo de expertos en planeación urbana y paisajismo se dedica a transformar espacios exteriores en entornos vibrantes y funcionales. Diseñamos soluciones innovadoras que mejoran la calidad de vida de las comunidades, integrando elementos naturales y sostenibles que fomentan la biodiversidad y la belleza natural.",
          interiorTitle: "Remodelación y Renovación",
          interiorDescription: "Ya sea que desees renovar un espacio existente o actualizar una estructura antigua, nuestros servicios de remodelación y renovación se adaptan a tus necesidades específicas. Te ayudamos a revitalizar tu propiedad con diseños modernos y eficientes, asegurando que cada proyecto se realice con la máxima calidad y atención al detalle.",
          landscapingTitle: "Consultoría en Eficiencia Energética",
          landscapingDescription: "Ofrecemos consultoría en eficiencia energética para proyectos nuevos y existentes. Nuestro objetivo es reducir el consumo de energía y los costos operativos mediante la implementación de soluciones innovadoras y sostenibles, como sistemas de energía renovable y aislamiento de alta eficiencia.",
          consultingTitle: "Diseño Arquitectónico Sostenible",
          consultingDescription: "Utilizamos materiales eco-amigables y tecnologías avanzadas para minimizar el impacto ambiental, asegurando que cada proyecto no solo cumpla con tus necesidades, sino que también respete y proteja nuestro planeta.",
          proyectTitle: "Gestión de Proyectos",
          proyectDescription: "Coordinamos todos los aspectos del proceso constructivo para garantizar que tu proyecto se realice a tiempo, dentro del presupuesto y con los más altos estándares de calidad.",
          ctaTitle: "¿Listo para soñar?",
          ctaDescription: "Contáctanos para hacer realidad esa idea o encontrarle solución al problema",
          ctaButton: "Contáctanos",
        },
        Nutrition: {
          bannerText: "Transforma tu vida con una alimentación saludable",
          servicesTitle: "Servicios",
          personalizedConsultationTitle: "Consulta Personalizada",
          personalizedConsultationDescription: "Ofrecemos consultas nutricionales individuales donde analizamos tu estado de salud actual y tus hábitos alimenticios. Juntos, desarrollaremos estrategias y planes de acción para mejorar tu bienestar general y alcanzar tus metas de salud a largo plazo.",
          mealPlansTitle: "Planes de Alimentación",
          mealPlansDescription: "Nuestros planes de alimentación personalizados están diseñados para satisfacer tus necesidades nutricionales únicas. Trabajamos contigo para crear un plan que se adapte a tus objetivos de salud, gustos y estilo de vida, garantizando una alimentación balanceada y deliciosa.",
          weightControlTitle: "Asesoría en Control de Peso",
          weightControlDescription: "Nuestro programa de control de peso te ayuda a alcanzar y mantener un peso saludable a través de cambios sostenibles en tu dieta y estilo de vida. Te brindamos apoyo continuo y motivación para garantizar tu éxito en el camino hacia una mejor salud.",
          ctaTitle: "¿Listo para transformar tu salud?",
          ctaDescription: "Agenda una cita con nosotros y da el primer paso hacia una vida más saludable.",
          ctaButton: "Agendar Citas",
      },
    }
    }
  };
  

i18n.use(initReactI18next).init({
  resources,
  lng: "es", 
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
