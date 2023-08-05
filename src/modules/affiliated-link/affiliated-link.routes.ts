import Container from "typedi";
import { AffiliatedLinkController } from "./affiliated-link.controller";
import express from 'express'

export const affiliatedRouter = express.Router();

affiliatedRouter
  .get(
    "/:affiliatedCode", 
    (req, res) => Container
      .get(AffiliatedLinkController)
      .redirectToAffiliatedLinkHandler({ req, res })
  )
