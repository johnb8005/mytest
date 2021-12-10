# replaces 'script src="/js' with the rignt path
# note: can't substitute /, so it is removed from the env variable (first char, removed, ${...:1}) and re added
# see https://stackoverflow.com/questions/6594085/remove-first-character-of-a-string-in-bash/20195713
echo "print env var"
echo ${SNOWPACK_PUBLIC_URL}
echo ${SNOWPACK_PUBLIC_URL/\//}
sed -i "s/script src=\"\/js/script src=\"\/${SNOWPACK_PUBLIC_URL/\//}\/js/g" build/index.html
