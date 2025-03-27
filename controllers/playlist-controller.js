import { playlistStore } from "../models/playlist-store.js";
import { trackStore } from "../models/track-store.js";

export const playlistController = {
  async index(request, response) {
    const playlist = await playlistStore.getPlaylistById(request.params.id);
    const viewData = {
      title: "Case Form",
      playlist: playlist,
    };
    response.render("playlist-view", viewData);
  },

  async addTrack(request, response) {
    // Get the playlist by its ID
    const playlist = await playlistStore.getPlaylistById(request.params.id);

    // Create a new track object from the request body with all the specified fields
    const newTrack = {
        subject: request.body.subject, // Subject (required)
        description: request.body.description, // Description (required)
        requester: request.body.requester, // Requester (required)
        related_interaction: request.body.related_interaction, // Related Interaction
        group: request.body.group, // Group (required)
        assignee: request.body.assignee, // Assignee
        tags: request.body.tags, // Tags
        form: request.body.form, // Form (required)
        type_of_asset_defect: request.body.type_of_asset_defect, // Type of Asset Defect (required)
        asset_defect_description: request.body.asset_defect_description, // Asset Defect Description (required)
        channel: request.body.channel, // Initial Channel Type (required)
        subform: request.body.subform, // Sub Form Name (required)
        desc: request.body.desc, // Primary/Secondary/Tertiary Description (required)
        fullname: request.body.fullname, // Full Name (required)
        email: request.body.email, // Email
        contact: Number(request.body.contact), // Contact Number
        address: request.body.address, // Address
        contactpref: request.body.contactpref, // Contact Preferences
        marketing: request.body.marketing, // Marketing Preferences
        to: request.body.to, // MI 2.0 TO/TSP/NTA (required)
        route: request.body.route, // Route (required)
        stationstop: request.body.stationstop, // Station/Stop
        priority: request.body.priority, // Priority
        county: request.body.county, // County (required)
        reporting: request.body.reporting, // Internal Status
        date_of_event: request.body.date_of_event, // Date of Travel/Interaction/Event (required)
        time_of_event: request.body.time_of_event, // Time of Travel/Interaction/Event (required)
        requester_details: request.body.requester_details, // Requester (required)
        what_required: request.body.what_required, // What is Required (required)
        location_event: request.body.location_event, // Location of the Interaction/Event (required)
        risk: request.body.risk, // Risk (required)
        type_of_escalation: request.body.type_of_escalation, // Type of Escalation/Complaint (required)
        date_of_feedback: request.body.date_of_feedback, // Date of Travel/Interaction/Event (Feedback) (required)
        time_of_feedback: request.body.time_of_feedback, // Time of Travel/Interaction/Event (Feedback) (required)
        requester_feedback: request.body.requester_feedback, // Requester (Feedback) (required)
        what_required_feedback: request.body.what_required_feedback, // What is Required (Feedback) (required)
        location_feedback: request.body.location_feedback, // Location of the Interaction/Event (Feedback) (required)
        customer_feedback: request.body.customer_feedback, // Feedback from Customer (required)
        date_of_accessibility: request.body.date_of_accessibility, // Date of Travel/Interaction/Event (Accessibility Assistance) (required)
        time_of_accessibility: request.body.time_of_accessibility, // Time of Travel/Interaction/Event (Accessibility Assistance) (required)
        day_of_accessibility: request.body.day_of_accessibility, // Day (Accessibility Assistance) (required)
        boarding_stop: request.body.boarding_stop, // Boarding Stop (required)
        alighting_stop: request.body.alighting_stop, // Alighting Stop (required)
        within_outside_24_hours: request.body.within_outside_24_hours, // Within or Outside 24 hours (required)
        travel_companion: request.body.travel_companion, // Do you have a travel companion? (required)
        reference_wheelchair: request.body.reference_wheelchair, // Do you have a reference wheelchair? (required)
        return_required: request.body.return_required, // Return Required (required)
        return_date: request.body.return_date, // Return Date (required)
        return_time: request.body.return_time, // Return Time
        return_day: request.body.return_day, // Return Day
        return_boarding_stop: request.body.return_boarding_stop, // Return Boarding Stop
        return_alighting_stop: request.body.return_alighting_stop, // Return Alighting Stop
        what_is_req: request.body.what_is_req,
    };

    console.log(`adding track ${newTrack.subject}`);
    await trackStore.addTrack(playlist._id, newTrack);
    response.redirect("/playlist/" + playlist._id);
  },

  async deleteTrack(request, response) {
    const playlistId = request.params.playlistid;
    const trackId = request.params.trackid;
    console.log(`Deleting Track ${trackId} from Playlist ${playlistId}`);
    await trackStore.deleteTrack(request.params.trackId);
    response.redirect("/playlist/" + playlistId);
  },
};
