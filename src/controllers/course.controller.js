import { Course } from "../models/Course.model"
import { matchedData } from "express-validator"

export const SearchCourseByTitle = async (req,res) =>{
    try{
        const {title} =  matchedData(req)
        const Courses = await Course.find({ title: new RegExp(title, "i") });
        if (!Courses?.length)
            return bringFromOutside

            return res.status(200).json({
              ok: true,
              msg: course,
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

    export const GetCourse = async (req, res) => {
             try {
                const { id } = req.params;
                const course = await Course.findById(id);
            
                if (!course)
                  return res.status(404).json({
                    ok: false,
                    msg: "Course not found",
                    token: req.token
                  });
            
                return res.status(200).json({
                  ok: true,
                  msg: course,
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

        

        const DeleteCourse = async (req,res) =>{

        }
    
        const updateCourse = async (req,res) =>{

        }

        export const bringFromOutside = async (req, res) => {
        //      try {
        //     const title = req.query.title
        //     console.log(`Buscando ${title}`)
        //     const key = process.env.OMDB_KEY
        //     const url = "http://www.omdbapi.com/?apikey=" + key + "&s=" + title + "&plot=full"
        //     const response = await fetch(url)
        //     const course = await response.json()
        
        //     const newCourse = new Course({
        //       title: course.Title,
        //       duration: Number(),
        //       externalId: "OMDB",
        //       image: course.Image
        //     })
          
        // }
        }