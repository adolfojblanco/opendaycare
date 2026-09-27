export type PostType = "achievement" | "activity" | "announcement";

export type Post = {
  id: string;
  author: string;
  avatar:
    | { kind: "initial"; bg: string; fg: string; text: string }
    | { kind: "icon" };
  time: string;
  publishedBy: string;
  audience: string;
  type: PostType;
  text: string;
  photoCaption?: string;
  likes: number;
  comments: number;
};

export const user = {
  name: "Caro Giménez",
  role: "Maestra · Soles",
  initial: "C",
};

export const classroom = {
  name: "Sala Soles",
  childrenCount: 12,
  dateLabel: "martes 17 jun",
};

export const posts: Post[] = [
  {
    id: "post-mateo-orinal",
    author: "Mateo",
    avatar: { kind: "initial", bg: "#A9D9E8", fg: "#1F7A93", text: "M" },
    time: "14:20",
    publishedBy: "publicado por vos",
    audience: "Para: familia de Mateo",
    type: "achievement",
    text: "¡Usó el orinal solito por primera vez! Estaba feliz de contárselo a todos. Un gran paso.",
    likes: 3,
    comments: 1,
  },
  {
    id: "post-mateo-temperas",
    author: "Mateo",
    avatar: { kind: "initial", bg: "#A9D9E8", fg: "#1F7A93", text: "M" },
    time: "09:40",
    publishedBy: "publicado por vos",
    audience: "Para: familia de Mateo",
    type: "activity",
    text: "Pintamos con témperas esta mañana. Mateo eligió el azul para todo y se concentró un montón mezclando colores.",
    photoCaption: "Foto · pintando con témperas",
    likes: 5,
    comments: 2,
  },
  {
    id: "post-anuncio-parque",
    author: "Anuncio general",
    avatar: { kind: "icon" },
    time: "07:50",
    publishedBy: "publicado por vos",
    audience: "Para: toda la sala",
    type: "announcement",
    text: "El viernes salimos al parque por la mañana. Recuerden mandar gorra y una botellita de agua.",
    likes: 8,
    comments: 0,
  },
];
