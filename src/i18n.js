import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
    en: {
      translation: {
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
          exploreButton: "Explore!",
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
          testimonial1: "Working with Sonartis S.A was a fantastic experience...",
          testimonial2: "We hired Sonartis S.A to create a mobile app for our service...",
          testimonial3: "The team at Sonartis S.A helped us redesign our outdated website...",
          testimonial4: "Sonartis S.A provided exceptional service in developing a custom e-commerce platform..."
        }
      },
    },
    es: {
      translation: {
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
          nutritionTitle: "Nutriólogo",
          nutritionDescription:
            "En Sonartis S.A., estamos comprometidos con tu salud y bienestar a través de un enfoque integral y personalizado en la nutrición.",
          developmentTitle: "Desarrollo",
          developmentDescription:
            "En Sonartis S.A., nos especializamos en desarrollar aplicaciones y sitios web personalizados que satisfacen las necesidades específicas de cada cliente.",
          testimonialsTitle: "Clientes anteriores",
          testimonial1: "Trabajar con Sonartis S.A fue una experiencia fantástica...",
          testimonial2: "Contratamos a Sonartis S.A para crear una aplicación móvil para nuestro servicio...",
          testimonial3: "El equipo de Sonartis S.A nos ayudó a rediseñar nuestro sitio web obsoleto...",
          testimonial4: "Sonartis S.A brindó un servicio excepcional en el desarrollo de una plataforma de comercio electrónico personalizada..."
        }
      },
    },
  };

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
