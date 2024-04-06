import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { SearchIcon } from '../../SVG/SearchIcon';
import { SearchBarProps } from './SearchBar.props';

const LocationSearchInput: React.FC<SearchBarProps> = (props) => {
  const { onSearch } = props;
  const [address, setAddress] = useState('');

  const handleChange = (address: any) => {
    setAddress(address);
  };

  const handleSelect = (address: any) => {
    geocodeByAddress(address)
      .then((results: any) => getLatLng(results[0]))
      .then((latLng: any) => {onSearch(latLng); console.log(latLng)})
      .catch((error: any) => console.error('Error', error));
  };


  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }: any) => (
        <div className='relative'>
          <div className="h-[3.5rem] w-[50rem] bg-[#D9D9D9] rounded-full flex items-center gap-8 px-10 border-[#292929] border-[1.5px] ">
            <SearchIcon Width={"24"} Height={"24"} />
            <input
              {...getInputProps({
                placeholder: "Search for your preferred city...",
                className: 'location-search-input flex-grow px-2 py-1 bg-transparent focus:outline-none ',
              })}
            />
          </div>

          <div className="autocomplete-dropdown-container">
            {loading &&
              <div className='absolute'>Loading...</div>}
            <div className='absolute'>
              {suggestions.map((suggestion: any, index: number) => {
                console.log(suggestion);
                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </PlacesAutocomplete >
  );
};

export default LocationSearchInput;