import {Lesson} from "../models/Lesson.model"
import {matchedData} from "express-validator"


export const SearchLessonByTitle = async (req,res) =>{
    try{
        const {title} =  matchedData(req)
        const Lessons = await Lesson.find({ title: new RegExp(title, "i") });
        if (!Lessons?.length)
        // externalLesson
            return res.status(200).json({
              ok: true,
              msg: lessons,
              token: req.token
            });
          } catch (error) {
            console.log(error);
            res.status(500).json({
              ok: false,
              msg: "Internal server error"
            });
          }
        };

    export const GetLessons = async (req, res) => {
             try {
                const { id } = req.params;
                const lesson = await Lesson.findById(id);
            
                if (!course)
                  return res.status(404).json({
                    ok: false,
                    msg: "Lesson not found",
                    token: req.token
                  });
            
                return res.status(200).json({
                  ok: true,
                  msg: lesson,
                  token: req.token
                });
              } catch (error) {
                console.log(error);
                res.status(500).json({
                  ok: false,
                  msg: "Internal server error"
                });
              }
        }

        // export const bringFromOutside = async (req, res) => {
        //   try {
        //     const title = req.query.title
        //     console.log(`Buscando ${title}`)
        //     const key = process.env.OMDB_KEY
        //     const url = "http://www.omdbapi.com/?apikey=" + key + "&s=" + title + "&plot=full"
        //     const response = await fetch(url)
        //     const course = await response.json()
        
        //     const newCourse = new Course({
        //       title: course.Title,
        //       externalId: "OMDB",
              
        //     })
        // }}