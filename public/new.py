import os
import json
import random

def generate_gallery_json(folder_path, title):
    # Normalize path and extract relative URL
    folder_path = folder_path.strip('/')
    full_path = os.path.join(os.getcwd(), folder_path)
    relative_url = f'/{folder_path}/'

    # Supported image extensions
    image_extensions = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}

    # List all image files
    images = [
        f for f in sorted(os.listdir(full_path))
        if os.path.splitext(f)[1].lower() in image_extensions
    ]

    # Build the JSON structure
    data = {
        "title": title,
        "images": []
    }

    for idx, image_file in enumerate(images, start=1):
        image_entry = {
            "id": idx,
            "src": relative_url + image_file,
            "alt": f"Photo {idx}",  # You can customize this
            "height": random.randint(500, 800)  # Fake height, or use actual with Pillow
        }
        data["images"].append(image_entry)

    # Output path
    output_file = os.path.join(full_path, "gallery.json")

    # Save JSON
    with open(output_file, "w") as f:
        json.dump(data, f, indent=2)

    print(f"✅ gallery.json generated at: {output_file}")


# ==== Example usage ====
if __name__ == "__main__":
    # Put your folder and title here
    generate_gallery_json("couples/riya_rishi", "Riya & Rishi.")
