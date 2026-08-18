"use server";

import { Event } from "@/database";
import connectDB from "../mongodb";

export const getSimiliarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();

    const event = await Event.findOne({ slug }).lean().exec();

    if (!event) {
      return [];
    }

    const similarEvents = await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    })
      .lean()
      .exec();

    return similarEvents.map((similarEvent) => ({
      ...similarEvent,
      _id: similarEvent._id.toString(),
      createdAt: similarEvent.createdAt.toISOString(),
      updatedAt: similarEvent.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.error("Failed to fetch similar events:", error);
    return [];
  }
};
