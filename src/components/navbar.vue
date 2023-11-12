<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">IT HELPS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page" href="#">หน้าแรก</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link " aria-current="page" href="#">ตะกร้าสินค้า</router-link>
                    </li>

                </ul>
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="ค้นหา..." aria-label="Search" v-model="product_store.input">

                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useProductStore } from '../store/product';
const product_store = useProductStore()


</script>

<style></style>