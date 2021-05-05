import photoNetworking from "./photo";
import fileNetworking from "./file";
import authNetworking from "./auth";

export default {
  ...photoNetworking,
  ...fileNetworking, 
  ...authNetworking,
}