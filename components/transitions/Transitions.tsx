// import { motion, Variants } from "framer-motion";

// const cardVariants: Variants = {
//   offscreen: {
//     y: 300,
//   },
//   onscreen: {
//     y: 100,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

// export default function Transitions({ component }) {
//   return (
//     <motion.div
//       className="card-container"
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0.8 }}
//     >
//       <div className="splash" />
//       <motion.div className="card" variants={cardVariants}>
//         {component}
//       </motion.div>
//     </motion.div>
//   );
// }
