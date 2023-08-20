import express from "express";
import colors from "./routes/color"
import palette from "./routes/palette"

const router = express.Router()

router.use("/colors", colors)
router.use("/palettes", palette)

export default router
