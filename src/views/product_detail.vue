<template>
    <div class="d-flex justify-content-center" v-if="!load_product">
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
    <div class="row mt-3" v-else>
        <div class="col-md-6">
            <img :src="product.image" alt="" class="img-fluid">
        </div>
        <div class="col-md-6">
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <h4>ราคา {{ currencyTHB(product.price) }} บาท</h4>
            <div class="d-fex mt-3">
                <div class="btn-group me-auto">
                    <button class="btn btn-outline-primary" @click="increment_quantity()">เพิ่มสินค้า</button>
                    <button class="btn btn-outline-primary">{{ quantity }}</button>
                    <button class="btn btn-outline-primary" @click="decrement_quantity()" :disabled="quantity == 1">ลบสินค้า</button>
                </div>
                <button class="btn btn-primary" @click="cart_store.add_cart_detail(product.id,product.price,quantity)">เพิ่มสินค้า</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
// currencyTHB
import { currencyTHB } from '../shared/currency';

// useCartSore
import {useCartStore} from '../store/cart'
const cart_store = useCartStore()

const product = ref({})

const quantity = ref(1)

const increment_quantity = () => {
    quantity.value++
}

const decrement_quantity = () => quantity.value--

const load_product = ref(false)

const route = useRoute()

const product_detail = async () => {
    await axios.get(`${import.meta.env.VITE_API}/${route.params.id}`)
        .then((response) => {
            product.value = response.data
            load_product.value = true
            // console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
}

onMounted(() => product_detail())

console.log(route.params.id)
</script>

<style></style>