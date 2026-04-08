/* Adaptador de ruta de Next.js. Reexpone el contenido editorial definido en cliente/.
 * No introduce lógica propia ni contenido adicional.
 */
export { default, generateMetadata } from "@/cliente/pages/servicios/[slug]"
