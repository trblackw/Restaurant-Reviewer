export interface Restaurant {
   id: string;
   name: string;
   url: string;
   location: {
      address: string;
      locality: string;
      city: string;
      latitude: string;
      longitude: string;
      zipcode: string;
      country_id: string;
   };
   average_cost_for_two: string;
   price_range: string;
   currency: string;
   thumb: string;
   featured_image: string;
   photos_url: string;
   menu_url: string;
   events_url: string;
   user_rating: UserRating;
   has_online_delivery: string;
   is_delivering_now: string;
   has_table_booking: string;
   deeplink: string;
   cuisines: string;
   all_reviews_count: string;
   photo_count: string;
   phone_numbers: string;
   photos: Photo[];
   all_reviews: Review[];
}

export interface Establishment {
   id: number;
   name: string;
}

export interface Coordinates {
   latitude: number;
   longitude: number;
}

export interface Cuisine {
   cuisine_id: string;
   cuisine_name: string;
}

export interface Category {
   category_id: string;
   category_name: string;
}

export interface City {
   id: string;
   name: string;
   country_id: string;
   country_name: string;
   is_state: string;
   state_id: string;
   state_name: string;
   state_code: string;
}

export interface DailyMenuItem {
   daily_menu_id: string;
   name: string;
   start_date: string;
   end_date: string;
   dishes: Dish[];
}

interface Dish {
   dish_id: string;
   name: string;
   price: string;
}

export interface Location {
   entity_type: string;
   entity_id: string;
   title: string;
   latitude: string;
   longitude: string;
   city_id: string;
   city_name: string;
   country_id: string;
   country_name: string;
}
export interface LocationDetails {
   popularity: {
      popularity: string;
      nightlife_index: string;
      top_cuisines: string[];
   };
   location: {
      entity_type: string;
      entity_id: string;
      title: string;
      latitude: string;
      longitude: string;
      city_id: string;
      city_name: string;
      country_id: string;
      country_name: string;
   };
   best_rated_restaurants: {
      id: string;
      name: string;
      url: string;
      location: {
         address: string;
         locality: string;
         city: string;
         latitude: string;
         longitude: string;
         zipcode: string;
         country_id: string;
      };
      average_cost_for_two: string;
      price_range: string;
      currency: string;
      thumb: string;
      featured_image: string;
      photos_url: string;
      menu_url: string;
      user_rating: UserRating;
      has_online_delivery: string;
      is_delivering_now: string;
      has_table_booking: string;
      deeplink: string;
      cuisines: string;
      all_reviews_count: string;
      photo_count: string;
      phone_number: string;
      photos: Photo[];
      all_reviews: Review[];
   }[];
}

interface UserRating {
   aggregate_rating: string;
   rating_text: string;
   rating_color: string;
   votes: string;
}
interface Photo {
   id: string;
   url: string;
   thumb_url: string;
   user: User;
   res_id: string;
   caption: string;
   timestamp: string;
   width: string;
   height: string;
   comments_count: string;
   likes_count: string;
}

export interface Review {
   rating: string;
   review_text: string;
   id: string;
   rating_color: string;
   review_time_friendly: string;
   rating_text: string;
   timestamp: string;
   likes: string;
   user: User;
   comments_count: string;
}

interface User {
   name: string;
   zomato_handle: string;
   foodie_level: string;
   foodie_level_num: string;
   foodie_color: string;
   profile_url: string;
   profile_deeplink: string;
   profile_image: string;
}
export interface Collection {
   collection_id: number;
   res_count: number;
   image_url: string;
   url: string;
   title: string;
   description: string;
   share_url: string;
}

export interface SearchResults {
   results_found: string;
   results_start: string;
   results_shown: string;
   restaurants: Restaurant[];
}
