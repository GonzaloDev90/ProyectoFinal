import BatmanProfile from '../assets/images/BatmanProfile.png';
import JokerProfile from '../assets/images/JokerProfile.jpg';
import CR7Profile from '../assets/images/CR7Profile.png';




const contacts = [
    {
        id: 1,
        name: 'Batman',
        last_time_connected: 'Ayer',
        is_connected: false,
        profile_img: BatmanProfile,
        messages:
            [
                {
                    id: 1,
                    author: 'Messi',
                    message: 'Bruce, ¿cómo va todo en Gotham? Escuché que hubo un problemita por allá.',
                    timestamp: '17:00'
                },
                {
                    id: 2,
                    author: 'Batman',
                    message: 'Lionel. Siempre hay un problemita en Gotham. El de hoy ya está resuelto, pero es un no parar. ¿Vos cómo andás con los tuyos?',
                    timestamp: '17:03'
                },
                {
                    id: 3,
                    author: 'Messi',
                    message: 'Acá todo bien, por suerte. Mis hijos ya están grandes, disfrutan de jugar al fútbol. Los tuyos, ¿cómo están?',
                    timestamp: '17:05'
                },
                {
                    id: 4,
                    author: 'Batman',
                    message: 'Los chicos de la "familia" están bien, cada uno con sus cosas. Es difícil mantenerlos a salvo, pero hacemos lo que podemos. Hablando de trabajo... ¿cómo van los entrenamientos?',
                    timestamp: '17:07'
                },
                {
                    id: 5,
                    author: 'Messi',
                    message: 'Bien, me mantengo activo, aunque el ritmo ya no es el de antes, ja. Pero sigo con las mismas ganas de siempre. ¿Vos no pensás en retirarte un poco? La noche en Gotham debe ser dura.',
                    timestamp: '17:10'
                },
                {
                    id: 6,
                    author: 'Batman',
                    message: 'El descanso no es una opción para mí, lo sabés. Siempre hay alguien que necesita a Batman. Pero cada tanto me tomo un respiro, claro. Es bueno saber que estás bien. Cuidate.',
                    timestamp: '17:12'
                },
                {
                    id: 7,
                    author: 'Messi',
                    message: 'Vos también, Bruce. Saludos a todos por allá.',
                    timestamp: '17:14'
                }],
    },

    {
        id: 2,
        name: 'Joker',
        last_time_connected: 'Hoy',
        is_connected: false,
        profile_img: JokerProfile,
        messages: [
            {
                id: 1,
                author: "Joker",
                message: "Hey, Leo. Oí que en tu último partido el árbitro fue un poco... caótico. Me siento identificado, ¿sabés? 🤡",
                timestamp: "17:15"
            },
            {
                id: 2,
                author: "Messi",
                message: "Hola, Guasón. Sí, a veces los partidos se complican. Pero lo importante es no perder la calma y jugar. ¿Qué andás tramando por Gotham?",
                timestamp: "17:17"
            },
            {
                id: 3,
                author: "Joker",
                message: "Oh, lo de siempre. Un poco de desorden, un toque de anarquía. La rutina, ya sabés. Hablando de rutinas, ¿qué se siente hacer un gol tan perfectamente calculado? La belleza de una jugada planeada... pero la risa está en el caos, ¿no creés?",
                timestamp: "17:20"
            },
            {
                id: 4,
                author: "Messi",
                message: "No, mirá, a mí lo que me gusta es el orden en la cancha. El equipo juega a lo que yo juego, y eso nos hace mejores. Vos lo que buscás es que nadie entienda nada.",
                timestamp: "17:23"
            },
            {
                id: 5,
                author: "Joker",
                message: "¡Exactamente! La risa en la cara de la gente cuando no sabe qué hacer... es el mejor gol. ¿Qué es más hermoso? ¿Un golazo o ver cómo un plan perfecto se desmorona de la forma más divertida?",
                timestamp: "17:26"
            },
            {
                id: 6,
                author: "Messi",
                message: "No sé, yo prefiero un poco de tranquilidad. Por suerte acá en Miami es todo más normal. Los pibes, la familia... eso sí es importante.",
                timestamp: "17:28"
            },
            {
                id: 7,
                author: "Joker",
                message: "Tranquilidad... ¡Qué concepto tan aburrido! Pero bueno, a cada uno lo suyo. Seguí pateando la pelotita, campeón. Yo seguiré pateando el tablero.",
                timestamp: "17:30"
            },
            {
                id: 8,
                author: "Messi",
                message: "Dale, Guasón. Y no te metas en problemas muy grandes, eh. Que Bruce se enoja.",
                timestamp: "17:32"
            },
            {
                id: 9,
                author: "Joker",
                message: "¡Esa es la idea! 😉",
                timestamp: "17:34"
            }
        ]
    },
    {
        id: 3,
        name: 'CR7',
        last_time_connected: 'Hoy',
        is_connected: true,
        profile_img: CR7Profile,
        messages:
            [
                {
                    id: 1,
                    author: 'Messi',
                    message: 'Cristiano, ¿cómo va todo en Arabia? Escuché que el ritmo allá es exigente, ¿no?.',
                    timestamp: '17:00'
                },
                {
                    id: 2,
                    author: 'Cristiano',
                    message: 'Leo. El ritmo siempre es exigente si eres el mejor. Aquí todo está bien, siempre ganando. No me quejo. ¿Vos cómo andás con los tuyos?.',
                    timestamp: '17:03'
                },
                {
                    id: 3,
                    author: 'Messi',
                    message: 'Acá todo tranquilo por suerte. Mis pibes crecen y disfrutan del fútbol. Y tus hijos, ¿cómo andan?.',
                    timestamp: '17:05'
                },
                {
                    id: 4,
                    author: 'Cristiano',
                    message: 'La familia está perfecta, la más importante para mí. El legado continúa, ya sabes. Hablando de trabajo... ¿te mantienes en forma? He visto que a veces no jugás todos los minutos.',
                    timestamp: '17:07'
                },
                {
                    id: 5,
                    author: 'Messi',
                    message: 'Me cuido, sí. Pero el ritmo de partido ya no es el de antes. Sigo disfrutando, eso no cambia. ¿Vos no pensás en aflojarle un poco? En Europa ya no te ven, ja.',
                    timestamp: '17:10'
                },
                {
                    id: 6,
                    author: 'Cristiano',
                    message: 'Aflojar no es una opción para mí, lo sabes. El trabajo duro es mi clave. Mientras yo pueda, seguiré compitiendo, batiendo récords. Es bueno saber que estás bien. Cuídate, campeón.',
                    timestamp: '17:12'
                },
                {
                    id: 7,
                    author: 'Messi',
                    message: 'Vos también, animal. Saludos a toda la familia por ahí.',
                    timestamp: '17:14'
                }],
    },
]

export default contacts