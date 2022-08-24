import { ref } from 'vue';

const useFetch = (apiMethod: any) => {
  const data: any = ref(null);
  const response = ref<any>(null);
  const error: any = ref(null);
  const loading: any = ref(false);

  const fetch = async () => {
    loading.value = true;
    try {
      const result = await apiMethod();
      response.value = result;
      data.value = result.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  fetch();

  return {
    response, error, data, loading, fetch,
  };
};

export default useFetch;
