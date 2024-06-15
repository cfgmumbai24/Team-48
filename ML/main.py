
from Speech2Text import Speech_to_Text
from Text2Text import compare_texts

import json
import requests

#API endpoint
url = "http://127.0.0.1:3000/api/students/"

def parse_json(json_data):
    try:
        parsed_json = json.loads(json_data)
        return parsed_json
    except json.JSONDecodeError:
        print("Error: Invalid JSON data")
        return None

try:
    response = requests.post(url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Extract the JSON data from the response
        received_data = response.text

        # Parse the JSON data
        parsed_data = parse_json(received_data)

        if parsed_data:
            # Process each received item
            for item in parsed_data.get("Received data", []):
                # Accessing fields from the item
                text = item.get("data", "")
                string_path = item.get("path", "")
                
          

        else:
            print("Error: Failed to parse JSON data")

    else:
        # Handle the case where the request was not successful
        print("Error: Failed to fetch data from the API. Status code:", response.status_code)

except Exception as e:
    # Handle any exceptions that occur during the request
    print("Error:", e)

def main(text, path_string):
  answer_text = Speech_to_Text(path_string)
  similarity_score = compare_texts(text, answer_text)
  if similarity_score >= 0.6:
    return 1
  else:
    return 0

main("Hello how are you", 'pos.mp3')
