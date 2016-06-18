#!/usr/bin/env bash


/usr/bin/osascript <<EOF
tell application "Safari"
  set docUrl to URL of document 1
  set URL of document 1 to docUrl
end tell
EOF