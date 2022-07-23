import Project from "../models/project.js";
import express from "express";
import mongoose from "mongoose";

export const getProjects = async (req, res) => {
  try {
    const project = await Project.find();

    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProjects = async (req, res) => {
  const project = req.body;
  const newProject = new Project(project);
  try {
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateProject = async (req, res) => {
  const { id } = req.params;
  const project = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No project with that id");

  const updatedProject = await Project.findByIdAndUpdate(
    id,
    { ...project },
    {
      new: true,
    }
  );

  res.json(updatedProject);
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No project with that id");

  await Project.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Project deleted seccessfully" });
};
