export interface Profile {
  profileId: string;
  userId: string;
  resume: string;
  skills: string[];
  experience: { company: string; position: string; duration: string }[];
}
