#!/bin/zsh

echo "Starting the Sanity Studio CMS."
# Define the Variables
sanity_dir="server"

# Move into the sibling directory
cd "$sanity_dir" || exit

# Start the Sanity.io project
echo "Starting Catholic Momma Mouse Sanity Studio CMS."
npm run dev