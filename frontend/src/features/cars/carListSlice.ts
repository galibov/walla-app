import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Car } from '../../types/car';
interface CarListState {
  cars: Car[];
}
